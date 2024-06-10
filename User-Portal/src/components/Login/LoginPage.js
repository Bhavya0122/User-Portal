import React,{useState} from 'react';
import {Link} from "react-router-dom";
import  classes from './LoginPage.module.css';
import login from "./login.png";

const LoginPage = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const emailHandler=(event)=>
    {
        setEmail(event.target.value);
    }
    const passwordHandler=(event)=>
    {
        setPassword(event.target.value);
        
    }
    const loginHandler=(event)=>
    {
        event.preventDefault();
        console.log(email+password);

    }
  return (
    
    <div className={classes.loginContainer}>
      <div className={classes.loginLeft}>
        <div className={classes.loginImage}>
          {/* You can use an img tag here with the src pointing to the image file */}
          <img src={login} alt="Industrial IoT" />
        </div>
      </div>
      <div className={classes.loginRight}>
        <h1>Welcome to <br /> Industrial IoT Portal</h1>
        <p>START AUTOMATING YOUR INDUSTRY</p>
        <form className={classes.frm} onSubmit={loginHandler}>
          <div className={classes.inputGroup}>
            <input type="text" placeholder="Enter user ID or E-mail" onChange={emailHandler}/>
          </div>
          <div className={classes.inputGroup}>
            <input type="password" placeholder="Enter Password" onChange={passwordHandler} />
            <button type="button" className={classes.passwordToggle}>
              {/* Password visibility icon */}
              👁️
            </button>
          </div>
          <div className={classes.inputGroup}>
            <input type="checkbox" id="save-password" />
            <label htmlFor="save-password">Save Password</label>
          </div>
          <button type="submit" className={classes.loginButton}><Link to="/users">LOGIN</Link></button>
        </form>
      </div>
    </div>
    
  );
};

export default LoginPage;