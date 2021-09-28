import {
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

// const createTask = async () => {
//   let data = {
//     body: 'Text',
//     isCompleted: false,
//   }
//   await axios.post('https://react-task-creator-default-rtdb.firebaseio.com/tasks.json', data).then(response => data = {...data, id: response.data.name});
//
//   console.log(data);
// }
//
// createTask();