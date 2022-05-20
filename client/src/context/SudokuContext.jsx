import { createContext, useReducer } from "react"
import sudokuReducer from "./SudokuReducer"

const SudokuContext = createContext()

export const SudokuProvider = ({ children }) => {
  const initState = {
    puzzleStr: "",
    solutionStr: "",
    validated: false,
    loading: false,
  }
  const [state, dispatch] = useReducer(sudokuReducer, initState)
  return (
    <SudokuContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SudokuContext.Provider>
  )
}

export default SudokuContext
