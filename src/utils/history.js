import { stringify as qsStringify, parse as qsParse } from 'qs';

export function parse(str) {
  return qsParse(str, { arrayFormat: "bracket" });
}

export function stringify(obj) {
  return qsStringify(obj, { arrayFormat: "bracket" });
}
