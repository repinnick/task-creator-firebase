import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TaskRootActions } from "../redux/actions";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(TaskRootActions, dispatch);
}