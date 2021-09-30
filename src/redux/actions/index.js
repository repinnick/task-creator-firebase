import * as TasksAction from './tasksAction';
import * as TaskAction from './taskAction';

export const TaskRootActions = {
  ...TasksAction,
  ...TaskAction
}