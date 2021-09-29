import React, { useState } from 'react';
import cl from './CreateTask.module.css';
import { useActions } from "../../../hooks/useActions";
import { Redirect } from "react-router-dom";
import { INITIAL_PATH } from "../../../definitions/constants";

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [referrer, setReferrer] = useState('')
  const {addTask} = useActions()

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleDescription = (e) => {
    setBody(e.target.value);
  }

  const addNewTask = (e) => {
    e.preventDefault();
    const data = {
      title,
      body,
      isCompleted: false,
    }
    addTask(data);
    setTitle('')
    setBody('')
    setReferrer(INITIAL_PATH.currentTasks.path)
  }

  if (referrer) {
    return <Redirect to={referrer} />
  }

  return (
    <form className={ cl.create }>
      <label>
        <input type="text" placeholder="Title" value={title} onChange={handleTitle} className={ cl.input }/>
      </label>
      <div className={cl.wrapper}>
          <label>
            <p className={ cl.descTitle }>Description</p>
            <textarea className={ cl.textarea } value={body} onChange={handleDescription}/>
          </label>
        <button className={cl.submit} onClick={addNewTask}>Add Task</button>
      </div>
    </form>
  );
};

export default CreateTask;