import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

function LogIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
    const user = users.find(
      (user) => user.email === formData.email && user.password === formData.password
     
    );
    console.log(formData.email)
    if (user) {
      alert('Log in successful!');
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="log-in-container">
      <div className="log-in-form" >
        <h2>Log In</h2>
        <label>Email</label>
        <input
        className='input'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
        className='input'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" onClick={handleLogIn} className='button'>Log In</button>
        <button id='signup' onClick={()=>{navigate('../signup')}} className='button'>Create Account</button>
      </div>
    </div>
  );
}

export default LogIn;
