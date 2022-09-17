import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { isLength } from "../lib/isLength.ts";

Deno.test("isLength test", () => {
  assertEquals(false, isLength("helloo", { min: 3, max: 5 }));
  assertEquals(true, isLength("hello", { min: 3 }));
  assertEquals(false, isLength("he", { min: 3 }));
});
