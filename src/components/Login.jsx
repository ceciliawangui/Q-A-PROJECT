import React, { useState } from 'react';
import '../components/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    console.log('Logging in...');
    console.log('Username: ', username);
    console.log('Password: ', password);
  };

  // Dummy data for testing purposes
  const dummyUsername = 'cess_kui';
  const dummyPassword = 'password123';

  const handleDummySubmit = (event) => {
    event.preventDefault();
    console.log('Logging in with dummy data...');
    console.log('Username: ', dummyUsername);
    console.log('Password: ', dummyPassword);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="login-container" style={showForm ? { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 } : null}>
      <button onClick={handleShowForm}>Login</button>
      {showForm && (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
          <br />
          <form onSubmit={handleDummySubmit}>
            <button type="submit">Use Dummy Data</button>
          </form>
          <button onClick={handleCloseForm}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Login;