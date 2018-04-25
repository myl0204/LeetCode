var convert = function(s, numRows) {
  let length = s.length
  const resultArr = []
  for (let i = 0; i < numRows; i ++) {
    resultArr.push([])
  }
  let i = 0
  s = s.split('')
  while (length--) {
    dealColumn()
    dealRow()
  }
  function dealColumn() {
    resultArr.forEach((strArr) => {
      strArr.push(s[i++])
    })
  }
  function dealRow() {
    resultArr.reduceRight((prev, strArr, index) => {
      if (!(index === 0 || index === resultArr.length - 1)) {
        strArr.push(s[i++])
      }
    },)
  }
  let result = ''
  resultArr.forEach((strArr) => {
    result += strArr.join('')
  })
  return result
};