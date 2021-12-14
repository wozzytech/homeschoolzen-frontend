import React, {useState, useEffect} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../fire';

const login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    }
    catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className='login'>
      <div className='loginContainer'>
        <h2>Logging In</h2>
        <input 
          placeholder='Email'
          type='email'
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input 
          placeholder='Password'
          type='password'
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Sign In</button> 
      </div>
    </div>
  )
}

export default login
