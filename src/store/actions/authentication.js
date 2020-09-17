import * as actionsTypes from '../actions/actionsTypes'
import { post } from '../../GlobalConstants/ApiCalls'
import { apiRoutes } from '../../GlobalConstants/ApiRoutes'

export const signupHandler = data => {
    console.log(data)
    return async dispatch => {
        var responce = await post(apiRoutes.SignUp, {
            userName: data.userName,
            email: data.email,
            passward: data.passward
        });
        if (responce.errors) {
            var errorstring = "";
            responce.errors.map(error => errorstring = errorstring + error + '\n\r');
            data.setErrorMessage(errorstring);
        }
        else {
            dispatch(saveUserInfo({
                userName: data.userName,
                email: data.email,
                passward: data.passward
            }))
            data.setRedirect(data.screens.SignInScreen);
        }
    }
};



const saveUserInfo = data => {
    return {
        type: actionsTypes.SAVE_USER_INFO,
        data: data
    }
}