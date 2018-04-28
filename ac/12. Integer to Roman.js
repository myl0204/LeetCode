/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const map = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }

  const thunsands = Math.floor(num / 1000)
  const hundreds = Math.floor(num / 100)
  const tens = Math.floor(num / 10)
  const units = num % 10

  const generator = function (base, unit, unit_5x, unit_10x) {
    const result = base < 4
      ? unit.repeat(base)
      : base === 4
      ? unit + unit_5x
      : base < 9
      ? unit_5x + unit.repeat(base - 5)
      : unit + unit_10x
    return result
  }
  return map[1000].repeat(thunsands) + generator(hundreds, map[100], map[500], map[1000]) + generator(tens, map[10], map[50], map[100])
    + generator(units, map[1], map[5], map[10])
}