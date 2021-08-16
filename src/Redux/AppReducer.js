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
export const initializeAppTC = () => async (dispatch) => {
    await dispatch(getLoginDataTC());
    dispatch(initializApp())
}


export default appReducer
