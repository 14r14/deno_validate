import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { isAlphaNumeric } from "../lib/isAlphaNumeric.ts";

Deno.test("isAlpha norm test", () => {
    assertEquals(true, isAlphaNumeric("hell0"));
    assertEquals(false, isAlphaNumeric("hell$"));
});

Deno.test("isAlpha ignore test", () => {
    assertEquals(true, isAlphaNumeric("hell0", "en-US", { ignore: "0" }));
    assertEquals(false, isAlphaNumeric("what$up", "en-US", { ignore: "u" }));
});