import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();

  const gotoPanel = () => {
    navigate('/admin-panel')
  }
  return (
    <div>
        <>
          <div className='centeradmin'>
          <p className='sign-in-text'> Admin Panel Sign In</p>
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
                console.log(data,"hihihi")
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
        </>
        </div>
  );
}

export default AdminLogin;
