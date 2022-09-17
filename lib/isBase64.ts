const NOT_BASE64 = /[^A-Z0-9+\/=]/i;
const URL_SAFE_BASE64 = /^[A-Z0-9_\-]*$/i;

interface Options {
  urlSafe?: boolean;
}

export function isBase64(str: string, options?: Options): boolean {
  /**
   * Check if a string is base64 encoded.
   *
   * @param {String} str - String to check.
   * @param {Object} options - Options object.
   * @param {Boolean} options.urlSafe - If set to true, the function will check if the string is URL-safe base64 encoded.
   *
   * @returns {Boolean} - Returns true if the string is base64 encoded, false otherwise.
   */
  if (typeof options === "object") {
    if (options.urlSafe) {
      return URL_SAFE_BASE64.test(str);
    }
  }
  return !NOT_BASE64.test(str);
}
