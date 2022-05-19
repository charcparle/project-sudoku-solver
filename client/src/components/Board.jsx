function Board() {
  let grids = []
  for (let i = 1; i <= 81; i++) {
    grids.push(
      <div
        className={
          "flex bg-greenApple hover:bg-white border border-glowEmerald items-center text-sm m-0 p-1 h-16 w-16 content-center justify-center " +
          (i % 3 === 0 && " border-r-8 ") +
          (i % 9 === 1 && " border-l-8 ") +
          (Math.ceil(i / 9) % 3 === 0 && " border-b-4 ") +
          (Math.ceil(i / 9) === 1 && " border-t-8 ") +
          (Math.ceil(i / 9) === 9 && " border-b-8 ")
        }
        key={i}
      >
        {i}
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-9 w-max">{grids}</div>
    </div>
  )
}

export default Board
