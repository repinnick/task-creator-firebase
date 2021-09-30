import { VIEW_TASK_INFO } from "../../definitions/constants";

const initialState = {
  title: '',
  body: '',
  id: '',
  isCompleted: false,
  date: '',
}

export const taskReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case VIEW_TASK_INFO:
      return {...payload}
    default:
      return state;
  }
};