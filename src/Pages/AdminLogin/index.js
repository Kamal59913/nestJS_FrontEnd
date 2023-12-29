import Cookies from 'js-cookie';
import AdminPanel from '../AdminPanel/adminPanel';
import React, { useState, useEffect } from 'react';

function AdminLogin() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    const localStorageToken = localStorage.getItem('token');
    if (token && token === localStorageToken) {
      setAuthenticated(true);
    } else {
      console.log('Token mismatch or does not exist.');
    }
  }, []);

  console.log(authenticated);

  const handleGoogleLogin = () => {
    try {
      const popup = window.open(
        'https://nestjs-backend-vilx.onrender.com/google',
        'Google Auth',
        'width=600,height=600'
      );

      window.addEventListener('message', (event) => {
        if (event.origin === 'https://nestjs-backend-vilx.onrender.com' && event.data.token) {
          // Set the 'token' cookie with the SameSite=None and Secure attributes
          document.cookie = `token=${event.data.token}; SameSite=None; Secure`;
          localStorage.setItem('token', event.data.token);
          setAuthenticated(true);
          popup.close();
        }
      });
    } catch (error) {
      console.error('Error logging in with Google:', error);
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
