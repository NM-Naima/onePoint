import redux, { createStore } from 'redux';

export function addElement(msg){
    return{
        type: "ADD_ELEMENT",
        msg
    }
};
const INITIAL_STATE = {
    data : [],
};

function reducer (state = INITIAL_STATE, action){
    switch (action.type){
        case 'ADD_ELEMENT' : 
        return {
            ...state,
            data : [...state.data, action.msg]
        }
        default:
            return state
    }
};

const store = createStore(reducer);
export default store;