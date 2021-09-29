import React from 'react';
import cl from './CurrentTasks.module.css'
import TaskList from "../../task-list/TaskList";
import { useSelector } from "react-redux";

const CurrentTasks = () => {
  const {tasks} = useSelector(state => state.tasks);

  return (
    <section className={cl.box}>
      <TaskList tasks={tasks.filter(task => task.isCompleted === false)}/>
    </section>
  );
};

export default CurrentTasks;