import React, { useEffect } from 'react';
import cl from './TaskInfo.module.css';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useActions";


const TaskInfo = (props) => {
  const {id} = useParams()
  const {title, body, isCompleted, date} = useSelector(state => state.task)
  const {getTask, clearComponent} = useActions()

  useEffect(() => {
    getTask(id);
    return clearComponent();
  }, [id])

  const viewTimestamp = () => {
    const taskDate = new Date(date);
    return `${taskDate.getHours()}:${taskDate.getMinutes()}`;
  }

  return (
    <div className={ cl.info }>
      <div className={cl.head}>
        <p className={cl.title}>{title}</p>
      </div>
      <div className={cl.wrapper}>
        <p>{body}</p>
        <div className={cl.footer}>
          {isCompleted ? <span className={cl.completed}>Completed</span> : <span className={cl.current}>Current</span>}
          <p className={cl.datetime}>Created at {viewTimestamp()}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;