import { ADD_TODO, DEC, INC } from "./actionType";

export const increment=(payload)=>({type:INC,payload});
export const decrement=(payload)=>({type:DEC,payload});
export const addTodo=(payload)=>({type:ADD_TODO,payload});