import React, {useState, useEffect} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../fire';


const register = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    }
    catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className='login'>
      <div className='loginContainer'>
        <h2>Register New User</h2>
        <input 
          placeholder='Email'
          type='email'
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input 
          placeholder='Password'
          type='password'
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Sign Up</button> 
      </div>
    </div>
  )
}

export default register;