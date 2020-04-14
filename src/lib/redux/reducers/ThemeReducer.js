import { CHANGE_THEME } from '../constants/theme';

const initialState = localStorage.getItem('dark-mode') ? JSON.parse(localStorage.getItem('dark-mode')) : false;

function ThemeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      localStorage.setItem('dark-mode', action.payload);
      return action.payload;
    default:
      return state;
  }
}

export default ThemeReducer;
