import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the information state domain
 */

const selectInformationDomain = state => state.information || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Information
 */

const makeSelectInformation = () =>
  createSelector(
    selectInformationDomain,
    substate => substate,
  );

export default makeSelectInformation;
export { selectInformationDomain };
