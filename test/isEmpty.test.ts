import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { isEmpty } from "../lib/isEmpty.ts";

Deno.test("isEmpty test", () => {
  assertEquals(false, isEmpty("hello"));
});
