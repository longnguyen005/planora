import { createServer } from "node:http";
import { once } from "node:events";
import { strict as assert } from "node:assert";
import { test } from "node:test";
import handler from "../api/unavailable.js";

test("frontend-only API reports unavailable over real HTTP without authenticating", async () => {
  const server = createServer(handler);
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  try {
    const origin = `http://127.0.0.1:${server.address().port}`;
    for (const [path, options] of [
      ["/api/auth/config", {}],
      ["/api/auth/login", { method: "POST", body: JSON.stringify({ email: "fixture@example.test", password: "synthetic-only" }) }],
      ["/api/conversations", { method: "POST" }],
    ]) {
      const response = await fetch(origin + path, options);
      assert.equal(response.status, 503);
      assert.equal(response.headers.get("cache-control"), "no-store");
      assert.match(response.headers.get("content-type"), /^application\/json/);
      const data = await response.json();
      assert.equal(data.code, "BACKEND_NOT_CONFIGURED");
      assert.equal(data.accessToken, undefined);
      assert.equal(data.user, undefined);
    }
  } finally {
    await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
});
