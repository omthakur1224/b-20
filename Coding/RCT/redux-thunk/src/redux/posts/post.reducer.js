import { ADD_POST, DELETE_POST, GET_POST, UPDATE_POST} from "./post.types";

const initState={POSTs:[]}

export const postReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_POST:
            // state.POSTs.push(action.payload)
                return{
                ...state,
                POSTs:action.payload
            }
        case UPDATE_POST:
            {
                const id=action.payload.id;
                const updatePOSTs=state.POSTs.map((POST)=>{
                    if(POST.id===id){
                        return action.payload;
                    }
                    return POST;
                })
                return{
                    ...state,
                    POSTs:updatePOSTs,
                } 
            }
        case DELETE_POST:{
            const id=action.payload.id;
            const filterPOST=state.POSTs.filter((POST)=>POST.id!==id);
            return {
                ...state,
                POSTs:filterPOST
            }
        }
        default:
                return state
    }
}