import { EDIT_PERMIT } from '../actions/types';

export const editPermit = (state = [], action) => {
    switch(action.type){
        case EDIT_PERMIT:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

