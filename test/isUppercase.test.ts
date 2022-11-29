import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { isUppercase } from "../lib/isUppercase.ts";

Deno.test("isUppercase test", () => {
  assertEquals(true, isUppercase("HELLO"));
  assertEquals(false, isUppercase("Hello"));
});
