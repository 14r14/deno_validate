import { isBase64 } from "./isBase64.ts";

export function isJWT(str: string) {
  const splitJWT = str.split(".");
  if (splitJWT.length > 3 || splitJWT.length < 2) {
    return false;
  }
  return splitJWT.reduce(
    (acc, curr) => acc && isBase64(curr, { urlSafe: true }),
    true,
  );
}
