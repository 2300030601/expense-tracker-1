// src/components/CreateAccountForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './CreateAccountForm.css';

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    console.log('Form Submitted:', formData);
    // Add your account creation logic here
  };

  return (
    <div className="account-page-container">
      <div className="form-card">
        <h2 className="form-title">Create Account</h2>
        <p className="form-subtitle">Start tracking your expenses today</p>

        <form onSubmit={handleSubmit} className="account-form">
          {/* Full Name Input */}
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="create-account-btn">
            Create Account
          </button>
        </form>

        {/* The Link back to the Sign In page */}
        <div className="sign-in-link">
          Already have an account? <Link to="/">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountForm;