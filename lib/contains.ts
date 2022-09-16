interface Options {
  ignoreCase?: boolean;
  minOccurences?: number;
}

export function contains(str: string, seed: string | number, options?: Options): boolean {
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
  let ignoreCase = false;
  let minOccurences = 1;
  if (typeof options === "object") {
    ignoreCase = options.ignoreCase || false;
    minOccurences = options.minOccurences || 1;
  }
  if (ignoreCase) {
    str = str.toLowerCase();
    seed = seed.toString().toLowerCase();
    if (str.indexOf(seed) === -1) {
      return false;
    }
    if (minOccurences > 1) {
      const numOccrs = (str.match("/" + seed + "/g") || []).length;
      return numOccrs >= minOccurences;
    }
  }

  return str.indexOf(seed.toString()) !== -1;
}
