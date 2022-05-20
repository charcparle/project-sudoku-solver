import { useContext, useEffect } from "react"
import SudokuContext from "../context/SudokuContext"
import BoardCell from "./BoardCell"
function Board() {
  const { puzzleStr, solutionStr } = useContext(SudokuContext)
  let puzzleArr = []
  puzzleArr =
    "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..".split(
      ""
    )
  useEffect(() => {
    if (solutionStr === "" || solutionStr === undefined) {
      puzzleArr = puzzleStr.split("")
    } else {
      puzzleArr = solutionStr.split("")
    }
    console.log(`puzzleArr: ${puzzleArr}`)
  }, [puzzleStr, solutionStr])
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-9 w-max">{puzzleArr.map((x,i)=>(<BoardCell content={x} idx={i} key={i}/>))}</div>
    </div>
  )
}

export default Board
