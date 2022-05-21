"use strict"
const express = require("express")
const router = express.Router()
const SudokuSolver = require("../controllers/sudoku-solver.js")

const solver = new SudokuSolver()

router.route("/").post((req, res) => {
  let puzzleStr,
    coor,
    val = ""
  if (
    req.body.puzzle == undefined ||
    req.body.coordinate == undefined ||
    req.body.value == undefined
  ) {
    res.json({ error: "Required field(s) missing" })
    return
  } else {
    puzzleStr = req.body.puzzle
    coor = req.body.coordinate.toLowerCase()
    val = req.body.value
    console.log(puzzleStr, coor, val)
  }
  let row = coor.charCodeAt(0) - 97 // getting the charCode of the first character, note that charcode of "a" is 97 --> row INDEX (zero based)
  let col = coor[1] - 1 // getting the second character from the input --> column INDEX (zero based)
  let coorRegex = /^[a-zA-Z][1-9]$/
  let valRegex = /^[1-9]{1}$/
  if (solver.validate(puzzleStr) != "validated") {
    console.log(solver.validate(puzzleStr))
    res.json(solver.validate(puzzleStr))
  } else if (!coorRegex.test(coor)) {
    res.json({ error: "Invalid coordinate" })
  } else if (!valRegex.test(val)) {
    res.json({ error: "Invalid value" })
  } else {
    let rowCheck = solver.checkRowPlacement(puzzleStr, row, val)
    let colCheck = solver.checkColPlacement(puzzleStr, col, val)
    let regCheck = solver.checkRegionPlacement(puzzleStr, row, col, val)
    let validity = true
    let confArr = []
    if (rowCheck == true && colCheck == true && regCheck == true) {
      validity = true
      res.json({ valid: validity })
    } else {
      validity = false
      !rowCheck && confArr.push("row")
      !colCheck && confArr.push("column")
      !regCheck && confArr.push("region")
      res.json({ valid: validity, conflict: confArr })
    }
  }
  return
})

module.exports = router
