/* SudokuActions contain functions related to the API */
import axios from "axios"
import { response } from "express"

export const getSolution = async (puzzleStr) => {
  let solved = puzzleStr
  const toBeSolved = { puzzle: puzzleStr }
  try {
    response = await axios.post("/api/solve", toBeSolved)
    return response.solution
  } catch (error) {
    console.log(error)
    return
  }
}
