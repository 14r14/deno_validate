import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { isBase32 } from "../lib/isBase32.ts";

Deno.test("isBase32 norm test 1", () => {
  assertEquals(false, isBase32("hello"));
});

Deno.test("isBase32 norm test 2", () => {
  assertEquals(true, isBase32("JBSWY3DPEHPK3PXP"));
});

Deno.test("isBase32 crockford test", () => {
  assertEquals(false, isBase32("JBSWY3DPEHPK3PXP===", { crockford: true }));
});
