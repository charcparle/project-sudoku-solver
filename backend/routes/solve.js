"use strict"
const express = require("express")
const router = express.Router()
const SudokuSolver = require("../controllers/sudoku-solver.js")

let solver = new SudokuSolver()

router.route("/").post((req, res) => {
  let puzzleStr = req.body.puzzle
  console.log(`puzzleStr: ${puzzleStr}`)
  if (puzzleStr === undefined || puzzleStr === "") {
    res.json({ error: "Required field missing" })
    return
  }
  const checkResult = solver.validate(puzzleStr)
  if (checkResult != "validated") {
    res.json(checkResult)
    return
  }
  const result = solver.solve(puzzleStr)
  if (result == null) {
    res.json({ error: "Puzzle cannot be solved" })
    return
  }
  res.json({ solution: result })
  return
})
module.exports = router
