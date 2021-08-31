/**
 *
 * Information
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
import makeSelectInformation from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Information() {
  useInjectReducer({ key: 'information', reducer });
  useInjectSaga({ key: 'information', saga });

  return (
    <div>
      <Helmet>
        <title>Information</title>
        <meta name="description" content="Description of Information" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Information.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  information: makeSelectInformation(),
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
)(Information);
