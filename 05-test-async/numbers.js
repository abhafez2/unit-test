/**
 * @name easternToEnglishNumbers
 * @description gives the equivalent
 * @export
 * @param {string} strNumber
 * @return {string}
 * @example
 * easternToEnglishNumbers("٥٦٧٨")
 * // 5678
 */
export function easternToEnglishNumbers(strNumber) {
  return strNumber
    .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d) => d.charCodeAt(0) - 1632)
    .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d) => d.charCodeAt(0) - 1776);
}
