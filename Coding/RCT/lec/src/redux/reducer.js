import { DEC, INC } from "./actionType";

const initState={count:0}

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
            default:{
                return state
            }
    }
}