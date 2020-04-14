import { CHANGE_THEME } from '../constants/theme';

export const changeTheme = () => {
  return (dispatch, getState) => {
    const { theme } = getState();
    dispatch({
      type: CHANGE_THEME,
      payload: !theme,
    });
  }
}