import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// 관리하는 슬라이스들
import authReducer from "./authSlice";
import modalReducer from "./modalSlice";
import userReducer from "./userSlice";
import listReducer from "./listSlice";
import registerReducer from "./registerSlice"
import exhibitionListReducer from "./exhibitionListSlice";

// 관리하는 saga
import { registerSagas } from "./registerSagas";
import { exhibitionListSagas } from "./exhibitionLisfSagas";

// rootReducers by using combineReducers
const rootReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  user: userReducer,
  list: listReducer,
  register: registerReducer,
  exhibitionList: exhibitionListReducer,
});

// rootSaga
function* rootSaga() {
  yield all([...registerSagas, ...exhibitionListSagas]);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// Store 구성 -> configureStore
// 여러가지 리듀서를 하나로 합칠 수 있음
// store는 하나의 리듀서만을 가진다.
const store = configureStore({
  reducer: rootReducers,
  middleware: middlewares,
});

// 사가 실행
sagaMiddleware.run(rootSaga);

// 외부에서 store를 쓰기위해 export
export default store;

export type RootState = ReturnType<typeof rootReducers>;
