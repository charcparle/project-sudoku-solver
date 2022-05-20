const sudokuReducer = (state, action) => {
    switch (action.type) {
        case "GET_SOLUTION":
            return {
                ...state,
                puzzleStr: action.payload.puzzle,
                solutionStr: action.payload.solution
            }
        default:
            break;
    }
  return
}
export default sudokuReducer
