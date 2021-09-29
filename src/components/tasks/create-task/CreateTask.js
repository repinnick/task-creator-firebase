import React from 'react';
import cl from './CreateTask.module.css';

const CreateTask = () => {

  return (
    <form className={ cl.create }>
      <label>
        <input type="text" placeholder="Title" className={ cl.input }/>
      </label>
      <div className={cl.wrapper}>
          <label>
            <p className={ cl.descTitle }>Description</p>
            <textarea className={ cl.textarea }/>
          </label>
        <button className={cl.submit}>Add Task</button>
      </div>
    </form>
  );
};

export default CreateTask;