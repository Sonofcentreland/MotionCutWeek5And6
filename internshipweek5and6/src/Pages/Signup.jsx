import React, { useState } from 'react';
import '../Styles/Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    // try {
    //   await authService.register(username, email, password);
    //   window.location.href = '/login';
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="signup-title">Signup</h2>
        <form onSubmit={handleSignup} className="form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
