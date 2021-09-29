import React, { useState } from 'react';
import cl from './Header.module.css';
import { NavLink, withRouter } from "react-router-dom";
import { INITIAL_PATH } from "../../definitions/constants";

const Header = (props) => {

  const [title, setTitle] = useState('Work List')
  // Object.keys(INITIAL_PATH).filter(key => {
  //   return INITIAL_PATH[key].path === props.location.pathname ? setTitle(INITIAL_PATH[key].title) : '';
  // })

  console.log('Pathname', props.location.pathname);
  console.log('Props', props)

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