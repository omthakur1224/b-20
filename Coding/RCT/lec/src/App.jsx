import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, decrement, increment } from './redux/action';
import { useState } from 'react';

function App() {
  let count=useSelector((store)=>store.count);
  const todos=useSelector((store)=>store.todos);
  const dispatch=useDispatch();
  const [value,setValue]=useState(0)
  // console.log(count)
  return (
    <div className='App'>
      <div >
        <h1>{count}</h1>
        <button onClick={()=>{dispatch(decrement(1))}}>DEC</button>
        <button onClick={()=>{dispatch(increment(1))}}>INC</button>

      </div>
      <div>
        <input type="number" onChange={({target})=>setValue(target.value||0)}/>
        <button onClick={()=>{dispatch(decrement(+value))}}>DEC by value</button>
        <button onClick={()=>{dispatch(increment(+value))}}>INC by value</button>

      </div>
      <div>
        <input type="text" onChange={({target})=>setValue(target.value)}/>
        <button onClick={()=>{dispatch(addTodo(value))}}>Add Todo</button>
        {
          todos.map((todo)=>(
            <div>
              
            </div>
          ))
        }
        {/* <button onClick={()=>{dispatch(addTodo(value))}}>Add Todo</button> */}
      </div>
    
    </div>
    
  );
}

export default App;
