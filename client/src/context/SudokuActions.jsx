/* SudokuActions contain functions related to the API */
import axios from "axios"

export const getSolution = async (puzzleStr) => {
  //   let solved = puzzleStr
  const toBeSolved = { puzzle: puzzleStr }
  try {
    const response = await axios.post("/api/solve", toBeSolved)
    return response.data.solution
  } catch (error) {
    console.log(error)
    return
  }
}
