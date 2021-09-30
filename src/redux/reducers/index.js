import { combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";
import { taskReducer } from "./taskReducer";

const rootReducers = combineReducers({
  tasks: tasksReducer,
  task: taskReducer,
});

export default rootReducers;