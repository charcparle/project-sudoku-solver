"use strict"
const express = require("express")
const router = express.Router()
const SudokuSolver = require("../controllers/sudoku-solver.js")

let solver = new SudokuSolver()

router.route("/").post((req, res) => {
  let puzzleStr = req.body.puzzle
  console.log(`puzzleStr: ${puzzleStr}`)
  if (puzzleStr == undefined) {
    res.json({ error: "Required field missing" })
  } else if (solver.validate(puzzleStr) != "validated") {
    res.json(solver.validate(puzzleStr))
  } else {
    let result = solver.solve(puzzleStr)
    if (result == null) {
      res.json({ error: "Puzzle cannot be solved" })
    } else {
      console.log(result)
      res.json({ solution: result })
    }
  }
})
module.exports = router
