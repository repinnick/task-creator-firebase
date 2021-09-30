import React from 'react';
import cl from './Task.module.css';
import { useActions } from "../../../hooks/useActions";

const Task = ({task}) => {
  const {isCompleted, id, date, title} = task;
  const {checkedTask, removeTask} = useActions();

  const handleCheckbox = (e) => {
    checkedTask({...task, isCompleted: e.target.checked});
  }

  const deleteTask = () => {
    removeTask(id);
  }

  const viewTimestamp = () => {
    const taskDate = new Date(date);
    return `${taskDate.getHours()}:${taskDate.getMinutes()}`;
  }

  return (
    <div className={cl.task + `${isCompleted ? ' ' + cl.done : ''}`}>
      <label className={cl.label}>
        <input className={cl.input} checked={isCompleted} onChange={handleCheckbox} type="checkbox"/>
        <span className={cl.span} />
      </label>
      <div className={cl.info}>
        <p className={cl.text + `${isCompleted ? ' ' + cl.done : ''}`}>{ title }</p>
        <p className={cl.time + `${isCompleted ? ' ' + cl.done : ''}`}>created at { viewTimestamp() }</p>
      </div>
      <div className={cl.delete}>
        <button onClick={deleteTask}>del</button>
      </div>
    </div>
  );
};

export default Task;