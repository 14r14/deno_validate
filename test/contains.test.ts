// CONTAINS BUGS

import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { contains } from "../lib/contains.ts";

Deno.test("contains test", () => {
  assertEquals(true, contains("th1s 1s a t3st", 1, { minOccurrences: 2 }));
  assertEquals(false, contains("hello", "helloo"));
  assertEquals(false, contains("th1s is a t3st", 1, { minOccurrences: 2 }));
  assertEquals(
    false,
    contains("Hello how are thee", "h", { ignoreCase: true, minOccurrences: 4 })
  );
  assertEquals(false, contains("hello", "H"));
  assertEquals(true, contains("hello", "H", { ignoreCase: true }));
});