export function isEmail(str: string): boolean {
  /**
   * Check if string is an email.
   *
   * @param {string} str - String to check.
   *
   * @returns {boolean} - True if string is an email, false otherwise.
   */
  const emailRegex = new RegExp(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  );
  if (emailRegex.test(str)) return true;
  return false;
}
