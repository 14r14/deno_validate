// utility method that can be used for future validators

const BASE58_REG = /^[A-HJ-NP-Za-km-z1-9]*$/;

export function isBase58(str: string): boolean {
  /**
   * Check if string is base58.
   *
   * @param {string} str - String to check.
   *
   * @returns {boolean} - True if string is base58, false otherwise.
   */
  return BASE58_REG.test(str);
}
