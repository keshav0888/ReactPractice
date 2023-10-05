import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Saga";
const sagaMiddleware = createSagaMiddleware();
//const store = compose(applyMiddleware(sagaMiddleware))(createStore)(rootReducer);
// const store=createStore(
//     applyMiddleware(sagaMiddleware),
//     rootReducer
// )
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    // Add other enhancers here if needed
  )
);
sagaMiddleware.run(rootSaga);
export default store;