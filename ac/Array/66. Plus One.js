/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = 1 + digits[i];
    if (sum >= 10) {
      digits[i] = 0;
    } else {
      digits[i] = sum;
      break;
    }
  }

  if (digits[0] === 0) return [1].concat(digits);

  return digits;
};