// src/components/AuthWrapper.jsx

import React from 'react';
import './AuthWrapper.css'; // We'll define the new CSS here

const AuthWrapper = ({ children }) => {
  return (
    <div className="auth-page-wrapper">
      {children}
    </div>
  );
};

export default AuthWrapper;