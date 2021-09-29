import React from 'react';
import cl from './TaskList.module.css';
import Task from "./task/Task";
import { useSelector } from "react-redux";

const TaskList = (props) => {
  const {tasks} = useSelector(state => state.tasks);
  console.log('Tasks', tasks)
  return (
    <div className={cl.list}>
      {tasks.map(task => <Task key={task.id} task={task} />)}
    </div>
  );
};

export default TaskList;