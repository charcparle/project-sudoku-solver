import { useState, useContext } from "react"
import SudokuContext from "../context/SudokuContext"
import { getSolution } from "../context/SudokuActions"
import { toast } from "react-toastify"
function Input() {
  const [text, setText] = useState("")
  const { dispatch } = useContext(SudokuContext)
  const placeholderString =
    "Input the puzzle in here - row by row, and use '.' for empty space"
  const handleChange = (e) => {
    setText(e.target.value)
    dispatch({
      type: "UPDATE_CURRENT",
      payload: { puzzle: e.target.value },
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let solution = ""
    try {
      solution = await getSolution(text)
      dispatch({
        type: "GET_SOLUTION",
        payload: { puzzle: text, solution: solution },
      })
      toast.success("Solved :)")
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <div className="flex flex-col m-2 p-2 text-white justify-end h-full">
      Puzzle String:
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <textarea
            className="block bg-gray-300 placeholder:italic placeholder:text-sm rounded text-midnightGreen hover:bg-gray-100"
            placeholder={placeholderString}
            value={text}
            onChange={handleChange}
          ></textarea>
          <button className="btn" type="submit">
            Solve
          </button>
        </div>
      </form>
    </div>
  )
}

export default Input
