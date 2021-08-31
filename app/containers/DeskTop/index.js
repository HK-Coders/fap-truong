/**
 *
 * DeskTop
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDeskTop from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import DeskTopComponent from './component/index';

export function DeskTop() {
  useInjectReducer({ key: 'deskTop', reducer });
  useInjectSaga({ key: 'deskTop', saga });

  return (
    <div>
      <Helmet>
        <title>DeskTop</title>
        <meta name="description" content="Description of DeskTop" />
      </Helmet>
      <FormattedMessage {...messages.header} />

      <DeskTopComponent />
    </div>
  );
}

DeskTop.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  deskTop: makeSelectDeskTop(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DeskTop);
