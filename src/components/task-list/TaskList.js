import React from 'react';
import cl from './TaskList.module.css';
import Task from "./task/Task";

const TaskList = () => {
  return (
    <div className={cl.list}>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskList;