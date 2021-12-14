import React from 'react'
import { useState } from 'react/cjs/react.development';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from '../fire';

const dashboard = () => {
  const [user,setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })
  const handleLogout = async () => {
     await signOut(auth);
  }
  return (
    <div>
      <h3>Hello: {user?.email}</h3>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default dashboard
