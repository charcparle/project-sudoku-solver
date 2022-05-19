import Board from "./components/Board"
import Input from "./components/Input"
import CheckPanel from "./components/CheckPanel"

function App() {
  return (
    <div className="bg-sky-100 h-full">
      <h1 className="font-bold text-2xl">Sudoku Solver</h1>
      <h4>Give me a puzzle and I'll solve it for you.</h4>
      <div className="flex flex-col border-2 rounded-2xl bg-sky-400 items-center">
        <div className="bg-white">
          <Board />
        </div>
        <div className="flex flex-row border-1 justify-around w-full">
          <div className="items-center">
            <Input />
          </div>
          <div className="items-center"><CheckPanel /></div>
        </div>
      </div>
    </div>
  )
}

export default App
