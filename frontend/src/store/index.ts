import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// 관리하는 슬라이스들
import modalReducer from "./modalSlice";
import userReducer from "./userSlice";
import registerReducer from "./registerSlice";
import exhibitionListReducer from "./exhibitionListSlice";
import sideBarReducer from "./sideBarSlice";

// Redux - Persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

// 관리하는 saga
import { registerSagas } from "./registerSagas";
import { exhibitionListSagas } from "./exhibitionListSagas";

// rootReducers by using combineReducers
const rootReducers = combineReducers({
  modal: modalReducer,
  user: userReducer,
  register: registerReducer,
  exhibitionList: exhibitionListReducer,
  sideBar: sideBarReducer,
});

// 새로운 persist 선언
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user","sideBar"],
};

// persist + rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducers);

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
  reducer: persistedReducer,
  middleware: middlewares,
});

// 사가 실행
sagaMiddleware.run(rootSaga);

// 외부에서 store를 쓰기위해 export
export default store;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducers>;
