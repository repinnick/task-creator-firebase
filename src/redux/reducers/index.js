import { combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";

const rootReducers = combineReducers({
  tasks: tasksReducer,
});

export default rootReducers;