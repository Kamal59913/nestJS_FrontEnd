import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPanel from '../AdminPanel/adminPanel';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();
  // const { authData } = useStore();
  // const setAuthData = useStore(state => state.setAuthData)
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const authData = localStorage.getItem('authData');
    console.log(authData)
    if (authData) {
      setAuthenticated(true);
    }
  }, []);
  const gotoPanel = () => {
    navigate('/admin-panel')
  }
  return (
    <div>
      {authenticated ? (
        <AdminPanel />
      ) : (
        <div>
          <h1>Welcome Sign In | Admin Panel |</h1>
          <GoogleOAuthProvider clientId="560963277459-nl156iumhmjeeu301ln2mi208bhfdapn.apps.googleusercontent.com">
           <GoogleLogin
             onSuccess={async (credentialResponse) => {
              try {
                const response = await axios.post(
                  'https://nestjs-backend-vilx.onrender.com/login',
                  {
                    token: credentialResponse.credential,
                  }
                );
                const data = response.data;
                console.log(data)
                localStorage.setItem('authData', JSON.stringify(data));
                const data2 = localStorage.setItem('authData', JSON.stringify(data));
                console.log(data2,'data')
                gotoPanel()
              } catch (error) {
                console.error('Login Error:', error);
              }
            }}
             onError={(err) => {
              console.log(err)
               console.log("Login Failed");
             }}
             useOneTap
           />
         </GoogleOAuthProvider>
        </div>
      )}
    </div>
  );
}

export default AdminLogin;
