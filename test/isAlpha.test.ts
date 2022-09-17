import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { isAlpha } from "../lib/isAlpha.ts";

Deno.test("isAlpha norm test", () => {
  assertEquals(false, isAlpha("hell0"));
});

Deno.test("isAlpha ignore test", () => {
  assertEquals(true, isAlpha("hell0", "en-US", { ignore: "0" }));
});
