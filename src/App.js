import React, { useEffect } from "react";
import './App.css'
import Header from "./components/header/Header";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CurrentTasks from "./components/tasks/current-tasks/CurrentTasks";
import CompletedTasks from "./components/tasks/completed-tasks/CompletedTasks";
import Footer from "./components/footer/Footer";
import CreateTask from "./components/tasks/create-task/CreateTask";
import { INITIAL_PATH } from "./definitions/constants";
import { useActions } from "./hooks/useActions";


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
              <Route path={ INITIAL_PATH.currentTasks.path } component={ CurrentTasks } title="current_tasks"/>
              <Route path={ INITIAL_PATH.completedTasks.path } component={ CompletedTasks }/>
              <Route path={ INITIAL_PATH.createTask.path } component={ CreateTask }/>
              <Redirect from={ '*' } to={ '/current' }/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
