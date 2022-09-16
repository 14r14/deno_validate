import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { equals } from "../lib/equals.ts";

Deno.test("equals test", () => {
  assertEquals(false, equals("hello", "helloo"));
  assertEquals(true, equals("hello", "hello"));
  assertEquals(false, equals(3, 4));
  assertEquals(true, equals(3, 3));
  assertEquals(false, equals("3", 3));
});
