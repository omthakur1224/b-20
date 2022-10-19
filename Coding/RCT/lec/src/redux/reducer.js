import { ADD_TODO, DEC, INC } from "./actionType";

const initState={count:0,todos:[]}

export const reducer=(state=initState,action)=>{
    switch(action.type){
        case INC :
            return {
                ...state,
                count:state.count+action.payload
            }
        case DEC :
            return{
                ...state,
                count:state.count-action.payload
            }
        case ADD_TODO:
            // state.todos.push(action.payload)
            return{
                ...state,
                todos:[state.todos,action.payload]
            }
            default:{
                return state
            }
    }
}