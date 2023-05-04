import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

// actions import
import { registerActions } from "./registerSlice";

// api import
import { createDrawingApi } from "./api";

// type interface
interface Action {
  type: string;
  payload?: any;
}

// 그림 등록 saga
function* onCreateDrawingStartAsync({ payload }: Action): Generator<any, void, any> {
  const { formRequestSuccess, formRequestError } = registerActions;
  try {
    const response = yield call(createDrawingApi, payload)
    if (response.status === 200) {
        yield put(formRequestSuccess(response.data))
        console.log("보내졌다!!!")
    }
  } catch (error: any) {
    yield put(formRequestError(error.response.data));
    return;
  }
}


// 사가들을 작동시킬 saga
function* onCreateDrawing() {
    const { formRequestStart } = registerActions;
    yield takeLatest(formRequestStart, onCreateDrawingStartAsync)
}


// 사가 export
export const registerSagas = [
    fork(onCreateDrawing),
]