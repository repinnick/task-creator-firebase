import { FETCH_TASKS, FETCH_TASKS_ERROR, FETCH_TASKS_SUCCESS } from "../../definitions/constants";

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
    default:
      return state;
  }
};