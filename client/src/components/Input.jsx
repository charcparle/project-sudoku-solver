function Input() {
  const placeholderString =
    "Input the puzzle in here - row by row, and use '.' for empty space"
  return (
    <div className="flex flex-col m-2 p-2 text-white justify-end h-full">
      Puzzle String:
      <textarea
        className="block bg-gray-300 placeholder:italic placeholder:text-sm rounded text-midnightGreen hover:bg-gray-100"
        placeholder={placeholderString}
      ></textarea>
      <button className="btn" type="submit">Solve</button>
    </div>
  )
}

export default Input
