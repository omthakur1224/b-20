import {  LOG_IN, LOG_OUT} from "./auth.types";
let token=localStorage.getItem('token')
const initState={
    auth:!token,
    token:"",
    }

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case LOG_IN:
            // state.todos.push(action.payload)
            localStorage.setItem("token",action.payload)
                return{
                ...state,
                auth:!state.auth,
                token:action.payload
            }
            case LOG_OUT:
                // state.todos.push(action.payload)
                localStorage.removeItem('token')
                    return{
                    ...state,
                    auth:!state.auth,
                    token:""
                }
        default:
                return state
    }
}