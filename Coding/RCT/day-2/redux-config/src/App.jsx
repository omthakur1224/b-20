
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counter/counter.action';
import Todo from './Todo/Todo';

function App() {
  const count=useSelector((store)=>store.counter.count);
  const dispactch=useDispatch()
  return (
    <div className="App">
      <h2>{count}</h2>
      <div>
        <button onClick={()=>dispactch(decrement(1))}>DEC</button>
        <button onClick={()=>dispactch(increment(1))}>INC</button>
      </div>
      <Todo/>
    </div>
  );
}

export default App;
