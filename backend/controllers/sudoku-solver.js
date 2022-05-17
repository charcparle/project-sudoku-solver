const validate = require("./validate")
const {
  checkRowPlacement,
  checkColPlacement,
  checkRegionPlacement,
} = require("./checkPlace")
const solve = require("./solvePuzzle")
class SudokuSolver {
  validate = validate
  checkRowPlacement = checkRowPlacement
  checkColPlacement = checkColPlacement
  checkRegionPlacement = checkRegionPlacement
  solve = solve
}

module.exports = SudokuSolver
