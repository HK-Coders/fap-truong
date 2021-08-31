/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  loading: false,
  message: "",
  listCampus: [],
  status: "",
  loginSuccess: [],
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.DEFAULT_ACTION:
        break;
      case types.SIGNIN:
        draft.loading = true;
        break;
      case types.SIGNIN_SUCCESS:
        draft.loading = false;
        draft.loginSuccess = action.payload;
        break;
      case types.SIGNIN_FAILED:
        draft.loading = false;
        draft.message = action.payload;
        break;
      case types.GET_CAMPUS:
        draft.loading = true;
        break;
      case types.GET_CAMPUS_SUCCESS:
        draft.loading = false;
        draft.listCampus = action.payload;
        break;
      case types.GET_CAMPUS_FAILED:
        draft.loading = false;
        draft.message = action.payload;
        break;
    }
  });

export default loginReducer;
