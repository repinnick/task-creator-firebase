import React from 'react';
import cl from './Login.module.css'
import image from './../../../assets/images/undraw_events_2p66.png'

const Login = () => {
  return (
    <div className={cl.login}>
      <img className={cl.image} src={image} alt="login image"/>
      <form className={cl.form}>
        <label>
          Username
          <input className={cl.email} type="email"/>
        </label>
        <label>
          Password
          <input className={cl.password} type="password"/>
        </label>
        <button className={cl.submit}>Log In</button>
      </form>
    </div>
  );
};

export default Login;