import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { contains } from "../lib/contains.ts";

Deno.test("contains test", () => {
  assertEquals(false, contains("hello", "helloo"));
  assertEquals(true, contains("hello", "H", { ignoreCase: true }));
  assertEquals(false, contains("hello", "H"));
  assertEquals(
    false,
    contains("Hello how are thee", "h", { ignoreCase: true, minOccurences: 4 })
  );
  assertEquals(true, contains("th1s 1s a t3st", 1, { minOccurences: 2 }));
});
