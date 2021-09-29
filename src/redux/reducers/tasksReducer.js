import {
  COMPLETE_TASK,
  FETCH_TASKS,
  FETCH_TASKS_ERROR,
  FETCH_TASKS_SUCCESS,
  REMOVE_TASK
} from "../../definitions/constants";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const tasksReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_TASKS:
      return {...state, loading: true};
    case FETCH_TASKS_SUCCESS:
      return {...state, loading: false, tasks: payload};
    case FETCH_TASKS_ERROR:
      return {...state, loading: false, error: payload}
    case COMPLETE_TASK:
      const tasks = state.tasks.map(task => task.id === payload ? {...task, isCompleted: !task.isCompleted} : task)
      return {...state, tasks: [...tasks]};
    case REMOVE_TASK:
      const filtered = state.tasks.map(task => task.id !== payload);
      return {...state, tasks: [...filtered]};
    default:
      return state;
  }
};

