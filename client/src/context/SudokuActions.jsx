/* SudokuActions contain functions related to the API */
import axios from "axios"

export const getSolution = async (puzzleStr) => {
  const toBeSolved = { puzzle: puzzleStr }
  try {
    const response = await axios.post("/api/solve", toBeSolved)
    if (response.data.error) throw response.data.error
    return response.data.solution
  } catch (error) {
    if (typeof error === "object") throw error.message
    throw error
  }
}
export const getValidation = async (puzzleStr, coor, val) => {
  const toBeChecked = { puzzle: puzzleStr, coordinate: coor, value: val }
  try {
    const response = await axios.post("/api/check", toBeChecked)
    if (response.data.error) throw response.data.error
    return response.data
  } catch (error) {
    if (typeof error === "object") throw error.message
    throw error
  }
}
