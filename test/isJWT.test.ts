import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { isJWT } from "../lib/isJWT.ts";

Deno.test("isJWT test", () => {
  assertEquals(
    true,
    isJWT(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    ),
  );
  assertEquals(false, isJWT("hello world"));
});
