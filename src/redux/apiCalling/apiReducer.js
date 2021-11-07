import * as actionTypeApi from "./apiConstant";
const initialState = {
  fetching: false,
  apiData: null,
  error: null,
};

export function apiReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypeApi.API_CALL_REQUEST:
      return { ...state, fetching: true };

    case actionTypeApi.API_CALL_SUCCESS:
      return { ...state, apiData: action.payload.apiData };

    case actionTypeApi.API_CALL_FAILURE:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
}
