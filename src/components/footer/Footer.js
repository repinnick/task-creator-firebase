import React from 'react';
import cl from './Footer.module.css';
import { NavLink } from "react-router-dom";
import { INITIAL_PATH } from "../../definitions/constants";

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <NavLink to={INITIAL_PATH.createTask.path}>
        <button className={cl.button}>+</button>
      </NavLink>
    </footer>
  );
};

export default Footer;