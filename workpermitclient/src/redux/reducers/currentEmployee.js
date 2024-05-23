import { CURRENT_EMPLOYEE } from '../actions/types';

export const currentEmployee = (state = null, action) => {
    switch(action.type){
        case CURRENT_EMPLOYEE:
            return action.payload;
        default:
            return state;
    }
}

