export function matches(str: string, regex: RegExp): boolean {
  /**
   * Check if string matches regex.
   *
   * @param {string} str - String to check.
   * @param {RegExp} regex - Regex to check against.
   *
   * @returns {boolean} - True if string matches regex, false otherwise.
   */
  if (!regex.test(str)) return false;
  return true;
}
