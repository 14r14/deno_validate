interface Options {
  ignoreCase?: boolean;
  minOccurrences?: number;
}

export function contains(
  str: string,
  seed: string | number,
  options?: Options,
): boolean {
  /**
   * Check if a string contains a seed(substring).
   *
   * @param {string} str - String to check.
   * @param {string | number} seed - Seed/substring to check for.
   * @param {Options} options - Options object.
   * @param {boolean} options.ignoreCase - Ignore case, default is false.
   * @param {number} options.minOccurences - Minimum occurences of seed, default is 1.
   *
   * @returns {boolean} - True if string contains seed, false otherwise.
   */
  const { ignoreCase = false, minOccurrences = 1 } = options || {};

  if (ignoreCase) {
    return str.toLowerCase().split(seed.toString().toLowerCase()).length >
      minOccurrences;
  }

  return str.split(seed.toString()).length > minOccurrences;
}
