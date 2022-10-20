import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, getTodo, updateTodo } from '../redux/todo/todo.action';

function Todo() {
    const [value,setValue]=useState('')
    const todos=useSelector((store)=>store.todos.todos);
    const dispatch=useDispatch();
    useEffect(()=>{
        // dispatch(getTodo());
    },[])
  return (
        <>
                <div>
                    <input type="text" onChange={({target})=>setValue(target.value)}/>
                    <button onClick={()=>{
                        dispatch(addTodo({
                            name:value,
                            status:"Not Done"
                        }));setValue("")
                    }}>Add</button>
                </div>
                <div>
                    {todos.map((todo,index)=>(
                        <div key={index}>
                            <div onClick={
                                ()=>{
                                    dispatch(updateTodo({
                                        ...todo,
                                        status:!todo.status
                                    }))
                                }
                            }>
                               {todo.name}-{todo.status}
                            </div>
                            <button onClick={()=>{dispatch(deleteTodo(todo))}}>Delete</button>
                        </div>
                    ))}
                </div>
        </>
  )
}

export default Todo