import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "./redux/actions/tasksAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <div className="App">

    </div>
  );
};

export default App;
