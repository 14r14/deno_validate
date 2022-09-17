export function equals(
  str: string | number,
  comparison: string | number,
): boolean {
  /**
   * Check if string or number matches comparison.
   *
   * @param {string | number}
   * @param {string | number}
   * @returns {boolean} - True if string matches comparison, false otherwise.
   */
  if (str === comparison) return true;
  return false;
}
