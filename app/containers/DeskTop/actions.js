/*
 *
 * DeskTop actions
 *
 */

import * as types from './constants';

export function defaultAction() {
  return {
    type: types.DEFAULT_ACTION,
  };
}

export function getImage(payload) {
  return {
    type: types.GET_IMAGE,
    payload
  };
}

export function getImageSuccess(payload) {
  return {
    type: types.GET_IMAGE_SUCCESS,
    payload
  }
}

export function getImageFailed(payload) {
  return {
    type: types.GET_IMAGE_FAILED,
    payload
  }
}
