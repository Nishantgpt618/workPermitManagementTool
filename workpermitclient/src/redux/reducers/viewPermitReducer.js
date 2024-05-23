import { FETCH_PERMIT } from '../actions/types';

export const ViewPermitReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_PERMIT:
            return action.payload;
        default:
            return state;
    }
}