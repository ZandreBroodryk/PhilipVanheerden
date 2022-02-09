import { AppDispatch, AppThunk } from '../store';
import { setLoadingAction, setUserAction } from './user.reducer';
import { userService } from '../../services';
import { UserModelProps } from '../../types';

export const getUserAction = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(setLoadingAction(true));
  return userService
    .getCurrentUser()
    .then((data) => {
      const user: UserModelProps = {
        email: data.email,
        mobile: data.mobile
      };
      dispatch(setUserAction(user));
    })
    .finally(() => dispatch(setLoadingAction(false)));
};
