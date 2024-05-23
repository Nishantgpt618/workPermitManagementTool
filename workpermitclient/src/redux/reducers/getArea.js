import { GET_AREA } from '../actions/types';

export const getArea = (state = null, action) => {
    switch(action.type){
        case GET_AREA:
            return action.payload;
        default:
            return state;
    }
}

