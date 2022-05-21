/* SudokuActions contain functions related to the API */
import axios from "axios"

export const getSolution = async (puzzleStr) => {
  //   let solved = puzzleStr
  const toBeSolved = { puzzle: puzzleStr }
  try {
    const response = await axios.post("/api/solve", toBeSolved)
    if (response.data.error) throw response.data.error
    return response.data.solution
  } catch (error) {
    throw (error)
  }
}
