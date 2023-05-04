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
import { exhibitionListActions } from "./exhibitionListSlice";

// api import
import { getExhibitionListApi } from "./api";

// type interface
interface Action {
  type: string;
  payload?: any;
}

// 전시회 목록 받아오는 saga
function* onGetExhibitionListStartAsync({
  payload,
}: Action): Generator<any, void, any> {
  const { getExhibitionListSuccess, getExhibitionListError } =
    exhibitionListActions;
  try {
    const response = yield call(getExhibitionListApi);
    if (response.status === 200) {
      yield put(getExhibitionListSuccess(response.data));
    }
  } catch (error: any) {
    yield put(getExhibitionListError(error.response.data));
    return;
  }
}

// 사가들을 작동시킬 saga
function* onGetExhibitionList() {
  const { getExhibitionListStart } = exhibitionListActions;
  yield takeLatest(getExhibitionListStart, onGetExhibitionListStartAsync);
}

// 사가 export
export const exhibitionListSagas = [fork(onGetExhibitionList)];
