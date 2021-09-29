import React from 'react';
import cl from './../current-tasks/CurrentTasks.module.css'
import TaskList from "../../task-list/TaskList";
import { useSelector } from "react-redux";

const CompletedTasks = () => {
  const {tasks} = useSelector(state => state.tasks);

  return (
    <section className={cl.box}>
      <TaskList tasks={tasks.filter(task => task.isCompleted === true)}/>
    </section>
  );
};

export default CompletedTasks;