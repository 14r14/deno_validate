import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { matches } from "../lib/matches.ts";

Deno.test("matches test", () => {
  assertEquals(true, matches("hello", /^.*$/));
  assertEquals(
    true,
    matches(
      "T3$st3rrr",
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    ),
  );
});
