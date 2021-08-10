import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import friendsReducer from "./FriendsReducer";
import findUsersReducer from "./FindUsersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formreducer} from "redux-form"
import appReducer from "./AppReducer";


let reducers = combineReducers({
    findUsersPage: findUsersReducer,
    friendsPage: friendsReducer,
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    auth: authReducer,
    form: formreducer,
    app: appReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store

