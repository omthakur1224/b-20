import {  DELETE_FEEDS, GET_FEEDS, UPDATE_FEEDS} from "./feeds.types";

const initState={feeds:[]}

export const feedReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_FEEDS:
            // state.todos.push(action.payload)
                return{
                ...state,
                feeds:action.payload
            }
        case UPDATE_FEEDS:
            {
                const id=action.payload.id;
                const updateFeeds=state.feeds.map((todo)=>{
                    if(todo.id===id){
                        return action.payload;
                    }
                    return todo;
                })
                return{
                    ...state,
                    feeds:updateFeeds,
                } 
            }
        case DELETE_FEEDS:{
            const id=action.payload.id;
            const filterFeeds=state.feeds.filter((todo)=>todo.id!==id);
            return {
                ...state,
                filterFeeds:filterFeeds
            }
        }
        default:
                return state
    }
}