import { combineReducers } from 'redux';

import authReducer from './AuthReducer';

const rootReducer = combineReducers({
    userInfo: authReducer,
});

export default rootReducer;