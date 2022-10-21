import { ADD_TODO, DELETE_TODO, UPDATE_TODO} from "./auth.types";

const initState={todos:[]}

export const todoReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_TODO:
            // state.todos.push(action.payload)
                return{
                ...state,
                todos:[state.todos,action.payload]
            }
        case UPDATE_TODO:
            {
                const id=action.payload.id;
                const updateTodos=state.todos.map((todo)=>{
                    if(todo.id===id){
                        return action.payload;
                    }
                    return todo;
                })
                return{
                    ...state,
                    todos:updateTodos,
                } 
            }
        case DELETE_TODO:{
            const id=action.payload.id;
            const filterTodo=state.todos.filter((todo)=>todo.id!==id);
            return {
                ...state,
                todos:filterTodo
            }
        }
        default:
                return state
    }
}