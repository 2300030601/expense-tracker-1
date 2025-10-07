// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import CreateAccountForm from './components/CreateAccountForm';
import AuthWrapper from './components/AuthWrapper'; // Import the new wrapper

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Wrap both form components in AuthWrapper */}
        <Route 
          path="/" 
          element={<AuthWrapper><SignInForm /></AuthWrapper>} 
        />
        <Route 
          path="/signup" 
          element={<AuthWrapper><CreateAccountForm /></AuthWrapper>} 
        />
      </Routes>
    </div>
  );
}

export default App;