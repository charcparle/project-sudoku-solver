const validate = (puzzleString) => {
  let rtn = {}
  const regex = /[^1-9\.]/
  if (puzzleString.length != 81) {
    rtn = { error: "Expected puzzle to be 81 characters long" }
  } else if (regex.test(puzzleString)) {
    rtn = { error: "Invalid characters in puzzle" }
  } else {
    rtn = "validated"
  }
  return rtn
}
module.exports = validate
