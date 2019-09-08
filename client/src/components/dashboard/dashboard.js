import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';

const Dashboard = ({ auth: { user, loading } }) => {
  return loading || user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div> Name :{user.name}</div>
      <div> Email : {user.email}</div>
    </Fragment>
  );
};
const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(Dashboard);
