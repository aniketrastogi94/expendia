import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './signedIn';
import SignedOut from './signOut';
import {connect} from 'react-redux';
 
const Navbar=(props)=>{
  const {auth,profile}=props;
  const links=auth.uid? <SignedIn profile={profile} /> : <SignedOut/> 
  return(
    <nav className='nav-wrapper grey darken-3' >
      <div className='container' >
        <Link to='/' className='brand-logo' >Expendia</Link>
        {links}
      </div>
    </nav>
  )
};

const mapStateToProps=state=>{
  return {
    auth:state.firebase.auth,
    profile:state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);