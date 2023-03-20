import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
    <div className="login">
        <h2>Signup</h2>
        <p>Already a member?<Link to='/login' className='links'>  Login.</Link></p>
        <label>Email</label><br></br>
        <input placeholder='Enter email'></input><br></br>
        <label>Password</label><br></br>
        <input placeholder='Enter password'></input><br></br>
        <label>Confirm password</label><br></br>
        <input placeholder='Re-enter password'></input><br></br>
        <button>Submit</button>
    </div>
    </>
  )
}

export default Signup