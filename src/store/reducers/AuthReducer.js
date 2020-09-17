import * as actionTypes from '../actions/actionsTypes';
import updateObject from '../../utils/updateObject';

const initialState = {
    userId: '',
    name: '',
    email: '',
    password: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_USER_INFO:
            const newState = {
                userName: action.data.userName,
                email: action.data.email,
                passward: action.data.passward,
            }
            return updateObject(state, newState);
        case actionTypes.LOG_OUT_USER:
            return initialState;
        default:
            return state;
    }
};

export default authReducer;