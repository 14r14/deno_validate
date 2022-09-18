import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { isLowercase } from "../lib/isLowercase.ts";

Deno.test("isLowercase test", () => {
  assertEquals(true, isLowercase("hello"));
  assertEquals(false, isLowercase("Hello"));
});
