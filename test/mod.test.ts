import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { isEmpty, isEmail, isLength } from "../mod.ts";

Deno.test("isEmpty test", () => {
  assertEquals(false, isEmpty("hello"));
});

Deno.test("isLength test", () => {
    assertEquals(false, isLength("helloo", { min: 3, max: 5 }));
    assertEquals(true, isLength("hello", { min: 3 }));
    assertEquals(false, isLength("he", { min: 3 }));
})

Deno.test("isEmail test", () => {
    assertEquals(false, isEmail("rohanramakrish@gmail"));
});
