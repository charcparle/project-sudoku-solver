const sudokuReducer = (state, action) => {
    switch (action.type) {
        case "GET_SOLUTION":
            return {
                ...state,
                puzzleStr: action.payload.puzzle,
                solutionStr: action.payload.solution
            }
        case "UPDATE_CURRENT":
            return {
                ...state,
                puzzleStr: action.payload.puzzle,
                solutionStr: ""
            }
        case "GET_VALIDITY":
            return {
                ...state,
                validated: action.payload
            }
        default:
            break;
    }
  return
}
export default sudokuReducer
