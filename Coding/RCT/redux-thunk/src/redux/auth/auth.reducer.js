import {  AUTH} from "./auth.types";

const initState={auth:false}

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case AUTH:
            // state.todos.push(action.payload)
                return{
                ...state,
                auth:!state.auth
            }
        default:
                return state
    }
}