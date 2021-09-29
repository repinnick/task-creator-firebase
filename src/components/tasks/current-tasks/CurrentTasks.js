import React from 'react';
import cl from './CurrentTasks.module.css'
import TaskList from "../../task-list/TaskList";

const CurrentTasks = () => {
  return (
    <section className={cl.current}>
      <TaskList />
    </section>
  );
};

export default CurrentTasks;