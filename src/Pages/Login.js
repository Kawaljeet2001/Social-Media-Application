import React, { useEffect, useContext, useState } from 'react';
import { signInWithGoogle } from '../firebase';
import { UserContext } from '../Providers/UserProvider';
import { Redirect } from 'react-router-dom';
export default function Login() {
  const user = useContext(UserContext)
  const [redirect, setredirect] = useState(null)
  useEffect(() => {
    if (user) {
      setredirect('/home')
    }
  }, [user]);

  return (
      <div className="login-buttons">
        {
          redirect ? <Redirect to = {redirect} /> : null
        }
        <button className="login-provider-button" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span> Continue with Google</span>
       </button>
      </div>
  );
}