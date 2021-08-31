import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the deskTop state domain
 */

const selectDeskTopDomain = state => state.deskTop || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DeskTop
 */

const makeSelectDeskTop = () =>
  createSelector(
    selectDeskTopDomain,
    substate => substate,
  );

export default makeSelectDeskTop;
export { selectDeskTopDomain };
