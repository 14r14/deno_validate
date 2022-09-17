interface isLengthOptions {
  min?: number;
  max?: number;
}

export function isLength(str: string, options: isLengthOptions): boolean {
  /**
   * Check if string is of a certain length (max and/or min).
   *
   * @param {string} str - String to check.
   * @param {isLengthOptions} options - Options object.
   *
   * @param {number} options.min - Minimum length, default is 0.
   * @param {number} options.max - Maximum length, no max if not specified.
   *
   * @returns {boolean} - True if string is of specified length, false otherwise.
   */
  let min = 0;
  let max: number | undefined;
  if (typeof options === "object") {
    min = options.min || 0;
    max = options.max;
  }
  const length = str.length;
  return length >= min && (typeof max === "undefined" || length <= max);
}
