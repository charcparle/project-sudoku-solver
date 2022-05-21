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
  const row = coor.charCodeAt(0) - 97 // getting the charCode of the first character, note that charcode of "a" is 97 --> row INDEX (zero based)
  const col = coor[1] - 1 // getting the second character from the input --> column INDEX (zero based)
  const coorRegex = /^[a-zA-Z][1-9]$/
  const valRegex = /^[1-9]{1}$/
  const checkResult = solver.validate(puzzleStr)
  // Validate puzzle string
  if (checkResult != "validated") {
    res.json(checkResult)
    return
  }
  // Validate Coordinate input
  if (!coorRegex.test(coor)) {
    res.json({ error: "Invalid coordinate" })
    return
  }
  // Validate Value input
  if (!valRegex.test(val)) {
    res.json({ error: "Invalid value" })
    return
  }
  // Check Row, Column, Region
  const rowCheck = solver.checkRowPlacement(puzzleStr, row, val)
  const colCheck = solver.checkColPlacement(puzzleStr, col, val)
  const regCheck = solver.checkRegionPlacement(puzzleStr, row, col, val)
  let validity = false
  let result = { valid: validity }
  let conflictArr = []
  if (rowCheck && colCheck && regCheck) {
    validity = true
  } else {
    validity = false
    !rowCheck && conflictArr.push("row")
    !colCheck && conflictArr.push("column")
    !regCheck && conflictArr.push("region")
    result = { ...result, conflict: conflictArr }
  }
  result = { ...result, valid: validity }
  res.json(result)
  return
})

module.exports = router
