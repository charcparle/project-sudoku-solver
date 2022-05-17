const {
  checkRowPlacement,
  checkColPlacement,
  checkRegionPlacement,
} = require("./checkPlace")

const solve = (puzzleString) => {
  if (!puzzleString.includes(".")) {
    console.log(`solved!: ${puzzleString}`)
    return puzzleString
  } else {
    let place = puzzleString.indexOf(".")
    let result = null
    for (let i = 1; i <= 9; i++) {
      let row = Math.floor(place / 9)
      let col = place % 9
      let nextStr = puzzleString
        .slice(0, place)
        .concat(i, puzzleString.slice(place + 1))
      let n = i.toString()
      let checked =
        checkRowPlacement(puzzleString, row, n) &&
        checkColPlacement(puzzleString, col, n) &&
        checkRegionPlacement(puzzleString, row, col, n)
      if (checked) {
        result = solve(nextStr)
        if (result != null) return result
      }
    }

    return null
  }
}

module.exports = solve
