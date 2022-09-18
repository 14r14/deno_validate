import { alphanumeric } from "./alpha.ts";

interface Options {
  ignore?: string | RegExp;
}

export function isAlphaNumeric(
  str: string,
  locale = "en-US",
  options?: Options,
): boolean {
  if (options && options.ignore) {
    if (options.ignore instanceof RegExp) {
      str = str.replace(options.ignore, "");
    } else if (typeof options.ignore === "string") {
      str = str.replace(
        new RegExp(
          `[${options.ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&")}]`,
          "g",
        ),
        "",
      );
    } else {
      throw new Error("ignore should be a string or a RegExp");
    }
  }

  if (locale in alphanumeric) {
    return alphanumeric[locale].test(str);
  }
  throw new Error(`Invalid locale '${locale}'`);
}

export const availableLocales = Object.keys(alphanumeric);
