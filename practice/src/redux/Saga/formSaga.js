import { call, put, takeEvery } from "redux-saga/effects";
function* FormData(action) {
    yield put({ type: "SUBMIT_FORMACTION",payload:action });
}
function* searchSaga() {
  yield takeEvery("SUBMIT_FORMACTION", FormData);
}

export default searchSaga;