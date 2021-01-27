import { REGISTER_SUCCESS } from "../actionTypes";

const initialState = {

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        return {

        };
        default:
            return state;
    }
}