import { ADD_RESULT, ADD_SCORE } from './AnalysisActions';

// Initial State
const initialState = { data: [] };

const AnalysisReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESULT :
      return {
        data: [action.result, ...state.data],
      };
    case ADD_SCORE:
      return {
        data: [action.result, ...state.data]
      };
    default:
      return state;
  }
};

/* Selectors */

// Get result by username
export const getResult = (state, username) => state.results.data.filter(result => result.login.toLowerCase() === username.toLowerCase())[0];

export const getScore = (state, username) => state.results.data.filter(result => result.login.toLowerCase() === username.toLowerCase())[0];

// Export Reducer
export default AnalysisReducer;
