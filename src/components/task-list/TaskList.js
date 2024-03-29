import React from 'react';
import cl from './TaskList.module.css';
import Task from "./task/Task";

const TaskList = ({tasks}) => {
  return (
    <div className={cl.list}>
      {tasks.map(task => <Task key={task.id} task={task} />)}
    </div>
  );
};

export default TaskList;