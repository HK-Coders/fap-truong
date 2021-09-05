import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import { setUser } from '../../utils/constants';
import { GetCampusFailed, GetCampusSuccess, SignInFailed, SignInSuccess } from './actions';
import { apiFetchData } from './api';
import * as types from './constants';


export function* getCampus({ payload }) {
  try {
    const res = yield call(apiFetchData, ['GetAllActiveCampus']);
    if (res.status === 200) {
      yield put(GetCampusSuccess(res.data.data));
    } else {
      yield put(GetCampusFailed(res.error_message));
    }

  } catch (error) {
    yield put(GetCampusFailed(error.message));
  }
}

export function* SignIn({ payload }) {
  console.log(payload)
  try {
    const res = yield call(apiFetchData, [`AuthenticationByGoogleAccessToken?CampusCode=${payload.campus}&token=${payload.token}`]);
    if (res.data.status === 200) {
      yield put(SignInSuccess(res.data.data[0]));
      setUser(res.data.data[0].AuthenKey, res.data.data[0].Rollnumber, res.data.data[0].StudentName)
    } else {
      yield put(SignInFailed(res.data.error_message));
    }
  } catch (error) {
    yield put(SignInFailed(error.message));
  }
}


// Individual exports for testing
export default function* loginSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(types.SIGNIN, SignIn);
  yield takeEvery(types.GET_CAMPUS, getCampus);
}
