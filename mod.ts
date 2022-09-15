export const isEmpty = (str: string): boolean => {
  /** 
   * Check if string is empty.
   * 
   * @param {string} str - String to check.
   * @returns {boolean} - True if string is empty, false otherwise.
   */
  if (!str) return true;
  return false;
};

interface isLengthOptions {
    min?: number;
    max?: number;
}

export const isLength = (str: string, options: isLengthOptions): boolean => {
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
};

export const isEmail = (str: string): boolean => {
    /**
     * Check if string is an email.
     * 
     * @param {string} str - String to check.
     * 
     * @returns {boolean} - True if string is an email, false otherwise.
     */
    const emailRegex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    if (emailRegex.test(str)) return true;
    return false;
};

