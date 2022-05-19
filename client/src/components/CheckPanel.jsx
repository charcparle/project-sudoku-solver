function CheckPanel() {
  return (
    <div className="flex flex-col justify-end m-2 p-2 text-white h-full">
      <div className="flex flex-row justify-between m-1">
        Value:
        <input
          type="text"
          className="bg-gray-300 w-2/3 rounded text-glowEmerald"
        />
      </div>
      <div className="flex flex-row justify-between m-1">
        Location:
        <input
          type="text"
          className="bg-gray-300 w-2/3 rounded text-glowEmerald"
        />
      </div>
      <div className="flex items-center w-full">
        <button className="btn w-full">Check</button>
      </div>
    </div>
  )
}

export default CheckPanel
