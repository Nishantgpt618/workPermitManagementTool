import { FETCH_EMPLOYEE } from '../actions/types';

export const loggedInEmployee = (state = {user: []}, action) => {
    switch(action.type){
        case FETCH_EMPLOYEE:
            return {...state,
                user: action.payload}
        default:
            return state;
    }
}

