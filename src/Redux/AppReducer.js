import {authAPI} from "../api/api";
import {getLoginDataTC} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

//state
let initialState = {
    initialized: false

};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED :
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
//action creaters
export const initializApp = () => {
    return {type: SET_INITIALIZED}
}


//thunks
export const initializeAppTC = () => {
    return (dispatch) => {
        dispatch(getLoginDataTC())

        /*let promise = dispatch(getLoginDataTC());
        Promise.all([promise]).then(() => {
                dispatch(initializApp())

            }
        )*/


    }
}

export default appReducer
