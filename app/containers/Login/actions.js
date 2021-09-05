/*
 *
 * Login actions
 *
 */

import * as types from './constants';

export function defaultAction() {
  return {
    type: types.DEFAULT_ACTION,
  };
}

export function SignIn1(payload) {
  return {
    type: types.SIGNIN,
    payload
  }
}

export function SignInSuccess(payload) {
  return {
    type: types.SIGNIN_SUCCESS,
    payload
  }
}

export function SignInFailed(payload) {
  return {
    type: types.SIGNIN_FAILED,
    payload
  }
}

export function GetCampus(payload) {
  return {
    type: types.GET_CAMPUS,
    payload
  }
}

export function GetCampusSuccess(payload) {
  return {
    type: types.GET_CAMPUS_SUCCESS,
    payload
  }
}

export function GetCampusFailed(payload) {
  return {
    type: types.GET_CAMPUS_FAILED,
    payload
  }
}

export function Reset() {
  return {
    type: types.RESET
  }
}