import { strict as assert } from "node:assert";
import { test } from "node:test";

// Explicit opt-in: the check uses real HTTPS, never a simulated login.
const origin = process.env.LIVE_DEPLOYMENT_URL;
test("deployed API reaches PostgreSQL and protects workspace routes", { skip: !origin }, async () => {
  assert.equal(new URL(origin).protocol, "https:");
  const ready = await fetch(`${origin}/api/ready`);
  assert.equal(ready.status, 200);
  assert.deepEqual(await ready.json(), { status: "ok", database: "connected" });
  const health = await fetch(`${origin}/api/health`);
  assert.equal(health.status, 200);
  assert.equal(health.headers.get("cache-control"), "no-store");
  const { capabilities } = await health.json();
  assert.equal(capabilities.accounts, true);
  assert.equal(capabilities.conversations, true);
  assert.equal(capabilities.planning, false);
  assert.equal(capabilities.execution, false);
  assert.equal(capabilities.signup, false);
  const protectedRoute = await fetch(`${origin}/api/conversations`);
  assert.equal(protectedRoute.status, 401);
  assert.match(protectedRoute.headers.get("content-type"), /^application\/json/);
  const missing = await fetch(`${origin}/api/deployment-check-missing-route`);
  assert.equal(missing.status, 404);
  assert.match(missing.headers.get("content-type"), /^application\/json/);
});
