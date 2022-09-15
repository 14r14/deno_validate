export const isEmpty = (str: string): boolean => {
  if (!str) return true;
  return false;
};

interface isLengthOptions {
    min?: number;
    max?: number;
}

export const isLength = (str: string, options: isLengthOptions): boolean => {
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
    const emailRegex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    if (emailRegex.test(str)) return true;
    return false;
};

