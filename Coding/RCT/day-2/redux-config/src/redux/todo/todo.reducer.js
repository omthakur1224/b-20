import { ADD_TODO, DELETE_TODO, UPDATE_TODO} from "./todo.types";

const initState={todos:[]}

export const todoReducer=(state=initState,{type,payload})=>{
    switch(type){
        case ADD_TODO:
            // state.todos.push(payload)
                return{
                ...state,
                todos:[state.todos,payload]
            }
        case UPDATE_TODO:
            {
                const id=payload.id;
                const updateTodos=state.todos.map((todo)=>{
                    if(todo.id===id){
                        return payload;
                    }
                    return todo;
                })
                return{
                    ...state,
                    todos:updateTodos,
                } 
            }
        case DELETE_TODO:{
            const id=payload.id;
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