import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { isEmail } from "../lib/isEmail.ts";

Deno.test("isEmail test", () => {
  assertEquals(false, isEmail("rohanramakrish@gmail"));
});
