function BoardCell({ content, idx }) {
  let n = idx + 1
  return (
    <>
      {/* if it is the first cell of each row, show the row no. on the left */}
      {n % 9 === 1 && (
        <div className="flex justify-center items-center text-greenApple p-1">
          {String.fromCharCode("A".charCodeAt(0) + Math.floor(n / 9))}
        </div>
      )}
      <div
        className={
          "flex bg-greenApple hover:bg-white border border-glowEmerald items-center text-sm md:text-base m-0 p-1 h-8 w-8 md:h-16 md:w-16 content-center justify-center " +
          (n % 3 === 0 && " border-r-4 ") + // every 3 column show right border
          (n % 9 === 1 && " border-l-4 ") + // 1st column shows left border
          (Math.ceil(n / 9) % 3 === 0 && " border-b-4 ") + // every 3 row show bottom border
          (Math.ceil(n / 9) === 1 && " border-t-4 ") // 1st row shows top border
        }
      >
        {content === "." ? "" : content}
      </div>
      {/* 11th column for centering the grid */}
      {n % 9 === 0 && <div></div>}
    </>
  )
}

export default BoardCell
