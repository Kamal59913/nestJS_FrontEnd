import React, { useState } from 'react';
import AdminPanel from '../AdminPanel/adminPanel';

function AdminLogin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  let popup;

  const receiveMessage = (event) => {
    if (
      event.origin === 'https://nestjs-backend-vilx.onrender.com' &&
      event.data.token
    ) {
      document.cookie = `token=${event.data.token}; SameSite=None; Secure`;
      localStorage.setItem('token', event.data.token);
      setAuthenticated(true);
      popup.close();
    }
  };

  const handleGoogleLogin = () => {
    if (clickCount === 0) {
      // First click: open Google sign-in popup
      try {
        popup = window.open(
          'https://nestjs-backend-vilx.onrender.com/google',
          'Google Auth',
          'width=600,height=600'
        );

        window.addEventListener('message', receiveMessage);
      } catch (error) {
        console.error('Error logging in with Google:', error);
      }
      setClickCount(1);
    } else if (clickCount === 1) {
      setAuthenticated(true)
      setClickCount(0); 
    }
  };
  return (
    <div>
      {authenticated ? (
        <AdminPanel />
      ) : (
        <div>
          <h1>Welcome Sign In | Admin Panel |</h1>
          <img
            src="google-signin-button.png"
            className="google-sign-in"
            onClick={handleGoogleLogin}
            alt="Google Sign In"
          />
        </div>
      )}
    </div>
  );
}

export default AdminLogin;
