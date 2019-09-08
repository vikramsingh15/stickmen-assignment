import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Landing = ({ isAuth }) => {
  if (isAuth) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>stickmen assignment</h1>
          <p className='lead'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            ipsam tempore, quidem excepturi iure minima doloremque? Perferendis
            iste excepturi ullam?
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up now
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({ isAuth: state.auth.isAuthenticated });
export default connect(mapStateToProps)(Landing);
