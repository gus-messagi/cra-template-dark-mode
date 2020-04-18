import { CHANGE_THEME } from '../constants/theme';

// eslint-disable-next-line import/prefer-default-export
export const changeTheme = () => (dispatch, getState) => {
  const { theme } = getState();
  dispatch({
    type: CHANGE_THEME,
    payload: !theme,
  });
};
