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
import { createDrawingApi, createPictureApi } from "./api";

// type interface
interface Action {
  type: string;
  payload?: any;
}

// 그림 등록 saga
function* onCreateDrawingStartAsync({ payload }: Action): Generator<any, void, any> {
  const { formRequestSuccess, formRequestError } = registerActions;
  const {title, contents, img} = payload
  const {type} = payload
  console.log("type은?", type)
  if (type === "mydrawing") {
    try {
      const response = yield call(createDrawingApi, {title, contents, img})
      if (response.status === 200) {
          yield put(formRequestSuccess(response.data))
      }
    } catch (error: any) {
      yield put(formRequestError(error.response.data));
      return;
    }
  } else if (type === "mypicture") {
    try {
      const response = yield call(createPictureApi, {title, contents, img})
      if (response.status === 200) {
        console.log("업로드 응답?", response.data)
          yield put(formRequestSuccess(response.data))
      }
    } catch (error: any) {
      yield put(formRequestError(error.response.data));
      return;
    }
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