// utility method that can be used for future validators

const BASE32 = /^[A-Z2-7]+=*$/;
const CROCKFORD_BASE32 = /^[A-HJKMNP-TV-Z0-9]+$/;

interface Options {
  crockford?: boolean;
}

export function isBase32(str: string, options?: Options): boolean {
  /**
   * Check if string is base32.
   *
   * @param {string} str - String to check.
   * @param {Options} options - Options object.
   * @param {boolean} options.crockford - Use Crockford's base32 alphabet, default is false.
   *
   * @returns {boolean} - True if string is base32, false otherwise.
   */
  if (typeof options === "object" && options.crockford) {
    return CROCKFORD_BASE32.test(str);
  }
  return BASE32.test(str);
}
