import {
  COMPLETE_TASK,
  FETCH_TASKS,
  FETCH_TASKS_ERROR,
  FETCH_TASKS_SUCCESS,
  FIRESTORE_URL,
  TASK_FIRESTORE_JSON
} from "../../definitions/constants";
import axios from "axios";

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      dispatch({type: FETCH_TASKS})
      const tasks = await axios.get(FIRESTORE_URL + TASK_FIRESTORE_JSON)
        .then(response => response.data)
        .then(data => Object.keys(data)
          .map(key => (
            {
              ...data[key],
              id: key,
            }
          ))
        )
      dispatch({type: FETCH_TASKS_SUCCESS, payload: tasks})
    } catch (e) {
      dispatch({type: FETCH_TASKS_ERROR, payload: e.message});
    }
  }
}

export const addTask = (task) => {
  return async (dispatch) => {
    try {
      await axios.post(FIRESTORE_URL + TASK_FIRESTORE_JSON, {...task, date: Date.now()})
      await dispatch(fetchTasks());
    } catch (e) {
      dispatch({type: FETCH_TASKS_ERROR, payload: e.message});
    }
  }
}

export const checkedTask = (task) => {
  return async (dispatch) => {
    try {
      dispatch({type: COMPLETE_TASK, payload: task.id});
      await axios.patch(`${ FIRESTORE_URL }tasks/${task.id}.json`, task);
    } catch (e) {
      dispatch({type: FETCH_TASKS_ERROR, payload: e.message});
    }
  }
}
