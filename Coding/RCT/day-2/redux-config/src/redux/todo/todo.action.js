import axios from "axios";
import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO } from "./todo.types";

export const addTodo=(payload)=>({
    type:ADD_TODO,
    payload:{
        id:Date.now(),
        ...payload
        }   
});
export const updateTodo=(payload)=>({type:UPDATE_TODO,payload});
export const deleteTodo=(payload)=>({type:DELETE_TODO,payload});

export const getTodo=async()=>{
    let res =await axios.get('http://localhost:8000/todos')
            let data= res.data;
            console.log(data);
            return {
                type:GET_TODO,
                payload:data
            }
}