import React from 'react';
import { useState } from 'react';

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        email:
        <input value={email} onChange = { (e) => setEmail(e.target.value)} type="email" name="email" />
      </label>
      <label>
        password:
        <input value={password} onChange = { (e) => setPassword(e.target.value)} type="password" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default login
