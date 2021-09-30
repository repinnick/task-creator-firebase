import * as TasksAction from './tasksAction';
import * as ViewAction from './viewAction';

export const TaskRootActions = {
  ...TasksAction,
  ...ViewAction
}