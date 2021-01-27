import { combineReducers } from "redux"
import { authReducer } from "../auth/reducer/authReducer"
import counterReducer from "../auth/reducer/Counter";
import { IsLoggedReducer } from "../auth/reducer/IsLogged";


const Allreducer = combineReducers({
    Auth: authReducer,
    IsLogged: IsLoggedReducer,
    Counter: counterReducer
})

export default Allreducer;