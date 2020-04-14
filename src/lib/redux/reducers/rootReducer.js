import { combineReducers } from 'redux';
import theme from './ThemeReducer';

const rootReducer = combineReducers({
  theme,
});

export default rootReducer;