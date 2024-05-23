import { SUBMIT_PERMIT } from '../actions/types';

export const permitReducer = (state = [], action) => {
    switch(action.type){
        case SUBMIT_PERMIT:
            return action.payload;
        default:
            return state;
    }
}

