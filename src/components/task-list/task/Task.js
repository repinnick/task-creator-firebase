import React from 'react';
import cl from './Task.module.css';

const Task = ({task}) => {
  const {isCompleted, body, date, title} = task;

  return (
    <div className={cl.task + `${isCompleted ? ' ' + cl.done : ''}`}>
      <label className={cl.label}>
        <input className={cl.input} type="checkbox"/>
        {/*checked={isCompleted}*/}
        <span className={cl.span} />
      </label>
      <div className={cl.info}>
        <p className={cl.text + `${isCompleted ? ' ' + cl.done : ''}`}>{ title }</p>
        <p className={cl.time + `${isCompleted ? ' ' + cl.done : ''}`}>{ date }</p>
      </div>
    </div>
  );
};

export default Task;