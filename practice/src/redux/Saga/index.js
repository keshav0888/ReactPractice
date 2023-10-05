import { all } from "redux-saga/effects";
import searchSaga from "./formSaga"
export default function* rootSaga(){
    yield all([searchSaga()])
}