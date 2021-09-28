import React from 'react';
import cl from './CurrentTasks.module.css'
import TaskList from "../../task-list/TaskList";
import { useSelector } from "react-redux";

const CurrentTasks = () => {
  const {tasks, loading, error} = useSelector(state => state.tasks)

  return (
    <section className={cl.current}>
      <TaskList tasks={tasks}/>
    </section>
  );
};

export default CurrentTasks;