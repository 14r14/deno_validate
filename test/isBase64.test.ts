import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { isBase64 } from "../lib/isBase64.ts";

Deno.test("isBase64 test 1", () => {
    assertEquals(false, isBase64("rohanramakrish@gmail"));
});

Deno.test("isBase64 test 2", () => {
    assertEquals(true, isBase64("YXNqZG5hanNkbmFqc25kYXM="));
})