/* // row & column to be inputted as index (0-8) */
const checkRowPlacement = (puzzleString, row, value) => {
  const regex = /[1-9]/
  if (!regex.test(value)) {
    return false
  } else {
    let curRow = puzzleString.slice(row * 9, row * 9 + 9)
    if (curRow.includes(value.toString())) {
      return false
    } else {
      return true
    }
  }
}

const checkColPlacement = (puzzleString, column, value) => {
  const regex = /[1-9]/
  if (!regex.test(value)) {
    return false
  } else {
    for (let i = 0; i < 9; i++) {
      let curPlace = puzzleString[i * 9 + column]
      if (curPlace === value.toString()) return false
    }
    return true
  }
}

const checkRegionPlacement = (puzzleString, row, column, value) => {
  const regex = /[1-9]/
  if (!regex.test(value)) return false

  const rowReg = (row) => Math.floor(row / 3)
  const colReg = (column) => Math.floor(column / 3)
  let curRowReg = rowReg(row)
  let curColReg = colReg(column)
  let regArr = puzzleString.split("")

  // Extract the array of the concerned Region
  regArr = regArr.filter(
    (x, i) =>
      rowReg(Math.floor(i / 9)) === curRowReg && colReg(i % 9) === curColReg
  )

  // Check whether the concerned Region array contains the digit in concern
  if (regArr.includes(value.toString())) {
    return false
  } else {
    return true
  }
}

module.exports = { checkRowPlacement, checkColPlacement, checkRegionPlacement }
