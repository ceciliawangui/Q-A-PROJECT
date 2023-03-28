import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
      <Link to='/'><h1>Home</h1></Link>
      <Link to='/login'><button>signup</button></Link>
      <Link to='/register'><button>signin</button></Link>
      <Link to='/AskQUestion'><button>AskQUestion</button></Link>
      <Link to='/question'><button>question</button></Link>
      <Link to='/singlequestion'><button>SingleQuestion</button></Link>
      <Link to='/profile'><button>Profile</button></Link>

    </div>
  );
}

export default Navbar;