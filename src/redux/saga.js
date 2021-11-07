import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workSaga);
}

function fetchShoppingProducts() {
  return axios({
    method: "get",
    url: "https://fakestoreapi.com/products",
  });
}
function* workSaga() {
  try {
    const response = yield call(fetchShoppingProducts);
    const apiData = response.data;
    console.log(apiData);
    yield put({ type: "API_CALL_SUCCESS", payload: { apiData: apiData } });
  } catch (error) {
    yield put({
      type: "API_CALL_FALIURE",
      payload: {
        error: error,
      },
    });
  }
}
