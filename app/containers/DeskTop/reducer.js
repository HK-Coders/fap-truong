/*
 *
 * DeskTop reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  loading: false,
  message: "",
  imageTest: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const deskTopReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.DEFAULT_ACTION:
        break;
      case types.GET_IMAGE:
        draft.loading = true;
        break;
      case types.GET_IMAGE_SUCCESS:
        draft.loading = false;
        draft.imageTest = action.payload;
        break;
      case types.GET_IMAGE_FAILED:
        draft.loading = false;
        draft.message = action.payload;
        break;
    }
  });

export default deskTopReducer;
