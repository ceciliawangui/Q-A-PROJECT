import React from 'react';
import NavBar from './Navbar';
import './Profile.css';

function Profile() {
  return (
    <>
    <NavBar/>
    <div className='Container'>
    <p> QUESTIONS <span> ANSWERS </span> & <span> COMMENTS </span></p>
      <div className="Profile">
        <button type="view" id='view'>view all</button>
      </div>
    </div>
    </>
  )
}

export default Profile;