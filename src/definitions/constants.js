export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

export const CREATE_TASK = 'CREATE_TASK';
export const VIEW_TASK_INFO = 'VIEW_TASK_INFO';
export const CLEAR_COMPONENT = 'CLEAR_COMPONENT';

// Firebase
export const FIRESTORE_URL = 'https://react-task-creator-default-rtdb.firebaseio.com/';
export const TASK_FIRESTORE_JSON = 'tasks.json';
export const API_KEY = 'AIzaSyDUF6R5ZlxmUKlM-551emrRczgRO_ePwHY'

// Path
export const INITIAL_PATH = {
  currentTasks: {path: '/current', title: 'Current Tasks'},
  createTask: {path: '/create-task', title: 'New Task'},
  completedTasks: {path: '/completed', title: 'Completed Tasks'},
  login: {path: '/login', title: 'Login'}
}