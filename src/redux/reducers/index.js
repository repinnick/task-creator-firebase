import { combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";
import { viewReducer } from "./viewReducer";

const rootReducers = combineReducers({
  tasks: tasksReducer,
  task: viewReducer,
});

export default rootReducers;