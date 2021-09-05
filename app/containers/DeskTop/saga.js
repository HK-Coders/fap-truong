import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import { getImageFailed, getImageSuccess } from './actions';
import { apiFetchData } from './api';
import * as types from './constants';

export function* getImage({ payload }) {
  try {
    const res = yield call(apiFetchData, ['RetriveImage?CampusCode=APHL&StudentCode=HE140833&Semester=Spring2021&Authen=HPsbqS5g4tlbEqcu7x5u16JdKvos2b70LBXWCW4xVitM4kytgY&rollNumber=HE140833'])
    console.log('image', res);
    yield put(getImageSuccess(res.data))
  } catch (error) {
    yield put(getImageFailed(error.message));
  }
}

// Individual exports for testing
export default function* deskTopSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(types.GET_IMAGE, getImage);
}
