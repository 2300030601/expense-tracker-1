// src/components/SignInForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './SignInForm.css';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In Submitted:', formData);
    // Add your sign-in logic here
  };

  return (
    <div className="signin-page-container">
      <div className="form-card">
        <h2 className="form-title">Welcome Back</h2>
        <p className="form-subtitle">Sign in to manage your expenses</p>

        <form onSubmit={handleSubmit} className="signin-form">
          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Sign In Button */}
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        {/* The Link to the Create Account page */}
        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;