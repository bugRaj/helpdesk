// Import the necessary React libraries and components
import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file for styling

function SignUp() {
  // Declare and initialize the state variables using the useState hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Email:', email, 'Password:', password);
  };

  // Function to handle changes in the email input field
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle changes in the password input field
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1 className="sign-up-title">Sign Up</h1>
        {/* Email input field */}
        <label className="sign-up-label" htmlFor="email">
          Name
        </label>
        <input
          className="sign-up-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
        />

        {/* Password input field */}
        <label className="sign-up-label" htmlFor="password">
          Password
        </label>
        <input
          className="sign-up-input"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Create a password"
          required
        />

        {/* Checkbox and submit button */}
        <div className="sign-up-checkbox">
          <input type="checkbox" id="remember" name="remember" defaultChecked />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className="sign-up-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

// Export the SignUp component for use in other files
export default SignUp;