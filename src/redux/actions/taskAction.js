import axios from "axios";
import { FETCH_TASKS_ERROR, FIRESTORE_URL, VIEW_TASK_INFO } from "../../definitions/constants";

export const getTask = (id) => {

  return async (dispatch) => {
    try {
      const data = await axios.get(`${ FIRESTORE_URL }tasks/${id}.json`).then(res =>  res.data);
      dispatch({type: VIEW_TASK_INFO, payload: data})
    } catch (e) {
      dispatch({type: FETCH_TASKS_ERROR, payload: e.message});
    }
  }
}