import React from 'react';
import cl from './Task.module.css';

const Task = () => {
  return (
    <div className={cl.task}>
      <label className={cl.label}>
        <input className={cl.input} type="checkbox" />
        <span className={cl.span}></span>
      </label>
      <div className={cl.info}>
        <p className={cl.text}>Go fishing with Stephen</p>
        <p className={cl.time}>9:00am</p>
      </div>
    </div>
  );
};

export default Task;