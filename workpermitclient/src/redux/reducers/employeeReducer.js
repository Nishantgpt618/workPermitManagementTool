import { SUBMIT_EMPLOYEE } from '../actions/types';

export const employeeReducer = (state = [], action) => {
    switch(action.type){
        case SUBMIT_EMPLOYEE:
            return action.payload;
        default:
            return state;
    }
}

