import {
  ADD_TASK,
  COMPLETE_TASK,
  FETCH_TASKS,
  FETCH_TASKS_ERROR,
  FETCH_TASKS_SUCCESS,
  FIRESTORE_URL, REMOVE_TASK,
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
      const data = {
        ...task,
        date: Date.now(),
      }
      const taskWithId = await axios.post(FIRESTORE_URL + TASK_FIRESTORE_JSON, data).then(res => {
        return {
          ...data,
          id: res.data.name
        }
      })
      dispatch({type: ADD_TASK, payload: taskWithId})
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

export const removeTask = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${ FIRESTORE_URL }tasks/${id}.json`);
      dispatch({type: REMOVE_TASK, payload: id});
    } catch (e) {
      dispatch({type: FETCH_TASKS_ERROR, payload: e.message});
    }
  }
}