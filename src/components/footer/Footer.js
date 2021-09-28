import React from 'react';
import cl from './Footer.module.css';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <NavLink to='/create-task'>
        <button className={cl.button}>+</button>
      </NavLink>
    </footer>
  );
};

export default Footer;