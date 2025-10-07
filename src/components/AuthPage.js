import React, { useState } from 'react';
import CreateAccountForm from './CreateAccountForm';
import SignInForm from './SignInForm';

const AuthPage = () => {
  // Start on the Sign In page, as is common for landing pages
  const [isSignIn, setIsSignIn] = useState(true);

  // Function to toggle the view, passed to children components
  const toggleView = (e) => {
    // Prevent the default link action
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setIsSignIn(prev => !prev);
  };

  // The toggleView function is passed as a prop to both forms
  const formProps = {
    toggleView: toggleView,
  };

  return (
    <>
      {/* Conditional rendering based on state */}
      {isSignIn ? (
        <SignInForm {...formProps} />
      ) : (
        <CreateAccountForm {...formProps} />
      )}
    </>
  );
};

export default AuthPage;