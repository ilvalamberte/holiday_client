import {
    SUCCESS_REGISTER,
    SUCCESS_LOGIN,
    FAIL_REGISTER,
    FAIL_LOGIN,
    LOG_OUT,
    SET_USER
} from '../types.js'

export default (state, action) => {
    switch (action.type) {
        case SET_USER : 
        return {
            ...state,
            user: action.payload,
            userAuth: true,
            errors:null
        }
        case LOG_OUT : 
            localStorage.removeItem('token')
            return {
                ...state,
                userAuth: false,
                errors: null
            }
        case SUCCESS_REGISTER:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                userAuth: true,
                errors:null,
            }
        case SUCCESS_LOGIN:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                userAuth: true,
                errors:null,
            }
        case FAIL_REGISTER :
        case FAIL_LOGIN:
            return {
                ...state,
                userAuth : null,
                errors: action.payload
            }

        default:
            return state
    }

}