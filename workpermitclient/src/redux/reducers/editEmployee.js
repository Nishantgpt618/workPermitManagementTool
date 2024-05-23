import { EDIT_EMPLOYEE } from '../actions/types';

export const editEmployee = (state = null, action) => {
    switch(action.type){
        case EDIT_EMPLOYEE:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

