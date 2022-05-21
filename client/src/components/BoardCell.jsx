function BoardCell({ content, idx }) {
  let n = idx + 1
  return (
    <div
      className={
        "flex bg-greenApple hover:bg-white border border-glowEmerald items-center text-sm m-0 p-1 h-16 w-16 content-center justify-center " +
        (n % 3 === 0 && " border-r-8 ") +
        (n % 9 === 1 && " border-l-8 ") +
        (Math.ceil(n / 9) % 3 === 0 && " border-b-4 ") +
        (Math.ceil(n / 9) === 1 && " border-t-8 ") +
        (Math.ceil(n / 9) === 9 && " border-b-8 ")
      }
      key={`cell-${n}`}
    >
      {content==="."?"":content}
    </div>
  )
}

export default BoardCell
