import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="join">
        <h1>Ask and answer questions, helps gain knowledge and also share your knowledge with society</h1>
        <h4>Login and connect with other users</h4>
      </div>
      <div className="footer">
        <h3>Contact us</h3>
        <p>via email</p>
      </div>
    </div>
  );
};

export default Home;