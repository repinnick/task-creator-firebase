import React from 'react';
import cl from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={cl.header}>
      <h1 className={cl.title}>Work List</h1>
      <nav className={cl.nav}>
        <NavLink className={cl.link} to='/current' activeClassName={cl.active}>Current</NavLink>
        <NavLink className={cl.link} to='/completed' activeClassName={cl.active}>Completed</NavLink>
      </nav>
    </header>
  );
};

export default Header;