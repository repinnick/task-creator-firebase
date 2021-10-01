import React, { useEffect } from "react";
import './App.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CurrentTasks from "./components/tasks/current-tasks/CurrentTasks";
import CompletedTasks from "./components/tasks/completed-tasks/CompletedTasks";
import CreateTask from "./components/tasks/create-task/CreateTask";
import TaskInfo from "./components/tasks/task-info/TaskInfo";
import { INITIAL_PATH } from "./definitions/constants";
import { useActions } from "./hooks/useActions";
import Login from "./components/auth/login/Login";


const App = () => {
  const {fetchTasks} = useActions();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <BrowserRouter>
      <div className="AppContainer">
        <div className="App">
          <Header/>
          <div className="AppContent">
            <Switch className="AppLinks">
              <Route path={ INITIAL_PATH.login.path } component={ Login }/>
              <Route path={ INITIAL_PATH.currentTasks.path } component={ CurrentTasks }/>
              <Route path={ INITIAL_PATH.completedTasks.path } component={ CompletedTasks }/>
              <Route path={ INITIAL_PATH.createTask.path } component={ CreateTask }/>
              <Route path='/task/:id' component={ TaskInfo }/>
              <Redirect from='*' to={ INITIAL_PATH.currentTasks.path }/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
