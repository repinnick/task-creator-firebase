import { CLEAR_COMPONENT, VIEW_TASK_INFO } from "../../definitions/constants";

const initialState = {
  title: '',
  body: '',
  id: '',
  isCompleted: false,
  date: '',
}

export const viewReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case VIEW_TASK_INFO:
      return {...payload}
    case CLEAR_COMPONENT:
      return {...initialState};
    default:
      return state;
  }
};