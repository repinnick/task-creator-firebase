import React, { useEffect, useState } from 'react';
import cl from './Header.module.css';
import { NavLink, useHistory, withRouter } from "react-router-dom";
import { INITIAL_PATH } from "../../definitions/constants";

const Header = (props) => {
  const [title, setTitle] = useState('Work List')
  const params = useHistory().location.pathname;

  useEffect(() => {
    Object.keys(INITIAL_PATH)
      .forEach(key => INITIAL_PATH[key].path === params ? setTitle(INITIAL_PATH[key].title) : '')
  })

  return (
    <header className={cl.header}>
      <h1 className={cl.title}>{ title }</h1>
      <nav className={cl.nav}>
        <NavLink className={cl.link} to={ INITIAL_PATH.currentTasks.path } activeClassName={cl.active}>Current</NavLink>
        <NavLink className={cl.link} to={ INITIAL_PATH.completedTasks.path } activeClassName={cl.active}>Completed</NavLink>
      </nav>
    </header>
  );
};

export default withRouter(Header);