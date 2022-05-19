import Board from "./components/Board"
import Input from "./components/Input"
import CheckPanel from "./components/CheckPanel"

function App() {
  return (
    <div className="h-full p-8">
      <h1 className="font-bold text-2xl text-greenApple">Sudoku Solver</h1>
      <h4 className="text-white italic">
        Give me a puzzle and I'll solve it for you.
      </h4>
      <br />
      <div className="flex flex-col items-center">
        <div className="flex flex-col border-2 rounded-2xl items-center w-full">
          <div className="w-4/5 m-2 p-2">
            <Board />
          </div>
          <div className="flex flex-row border-1 justify-around w-full">
            <div className="items-center w-1/3">
              <Input />
            </div>
            <div className="items-center w-1/3">
              <CheckPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
