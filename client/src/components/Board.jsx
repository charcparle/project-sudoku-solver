import { useState, useContext, useEffect } from "react"
import SudokuContext from "../context/SudokuContext"
import BoardCell from "./BoardCell"
function Board() {
  const { puzzleStr, solutionStr } = useContext(SudokuContext)
  let emptyArr = []
  for (let i = 0; i < 81; i++) {
    emptyArr.push(".")
  }
  const [puzzleArr, setPuzzleArr] = useState(emptyArr)
  useEffect(() => {
    if (solutionStr === "" || !solutionStr) {
      // Handle cases where length!==81
      let diff = 81 - puzzleStr.length
      let targetArr = puzzleStr.split("")
      if (diff > 0) {
        for (let j = 0; j < diff; j++) {
          targetArr.push(".")
        }
      } else if (diff < 0) {
        targetArr = targetArr.slice(0, 81)
      }
      setPuzzleArr(targetArr)
    } else {
      // When Solution is retrieved
      setPuzzleArr(solutionStr.split(""))
    }
  }, [puzzleStr, solutionStr, setPuzzleArr])
  const xLabel = [" "]
  for (let c = 1; c <= 9; c++) {
    xLabel.push(c)
    c === 9 && xLabel.push("")  // placeholder for the 11th column
  }
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-11 w-max">
        {xLabel.map((x) => (
          <div className="flex justify-center text-greenApple">{x}</div>
        ))}
        {puzzleArr.map((x, i) => (
          <BoardCell content={x} idx={i} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Board
