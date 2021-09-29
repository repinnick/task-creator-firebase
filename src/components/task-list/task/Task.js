import React, { useState } from 'react';
import cl from './Task.module.css';
import { useActions } from "../../../hooks/useActions";

const Task = ({task}) => {
  const {isCompleted, date, title} = task;
  const {checkedTask} = useActions();

  const handleCheckbox = (e) => {
    checkedTask({...task, isCompleted: e.target.checked})
  }

  return (
    <div className={cl.task + `${isCompleted ? ' ' + cl.done : ''}`}>
      <label className={cl.label}>
        <input className={cl.input} checked={isCompleted} onChange={handleCheckbox} type="checkbox"/>
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