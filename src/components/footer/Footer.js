import React from 'react';
import cl from './Footer.module.css';
import { NavLink, useHistory } from "react-router-dom";
import { INITIAL_PATH } from "../../definitions/constants";

const Footer = () => {
  const params = useHistory().location.pathname;

  if (params === INITIAL_PATH.login.path) {
    return (
      <footer className={cl.footer} />
    )
  }

  return (
    <footer className={cl.footer}>
      <NavLink to={INITIAL_PATH.createTask.path}>
        <button className={cl.button}>+</button>
      </NavLink>
    </footer>
  );
};

export default Footer;