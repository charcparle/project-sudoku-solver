import { useState, useContext } from "react"

function CheckPanel() {
  const [toBeChecked, setToBeChecked] = useState({
    digit: "",
    loc: "",
  })
  // const handleChange = (e,)
  const handleChangeDigit = (e)=>{
    setToBeChecked((prevState)=>({...prevState, digit:e.target.value}))
  }
  const handleChangeLoc = (e)=>{
    setToBeChecked((prevState)=>({...prevState, loc:e.target.value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Sent for checking")
  }
  return (
    <form
      className="flex flex-col justify-end m-2 p-2 text-white h-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-row justify-between m-1">
        Value:
        <input
          type="text"
          className="bg-gray-300 w-2/3 rounded text-glowEmerald placeholder:italic placeholder:text-sm"
          placeholder=" (1-9)"
          onChange={handleChangeDigit}
          value={toBeChecked.digit}
        />
      </div>
      <div className="flex flex-row justify-between m-1">
        Location:
        <input
          type="text"
          className="bg-gray-300 w-2/3 rounded text-glowEmerald placeholder:italic placeholder:text-sm"
          placeholder=" e.g. H4"
          onChange={handleChangeLoc}
          value={toBeChecked.loc}
        />
      </div>
      <div className="flex items-center w-full">
        <button className="btn w-full">Check</button>
      </div>
    </form>
  )
}

export default CheckPanel
