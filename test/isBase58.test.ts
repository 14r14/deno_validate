import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { isBase58 } from "../lib/isBase58.ts";

Deno.test("isBase58 test 1", () => {
    assertEquals(false, isBase58("hello"));
});

Deno.test("isBase58 test 2", () => {
    assertEquals(true, isBase58("zYj1Yh"));
});

Deno.test("isBase58 test 3", () => {
    assertEquals(false, isBase58("zYj1Yh=="));
});