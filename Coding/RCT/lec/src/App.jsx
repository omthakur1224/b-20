import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  let count=useSelector((state)=>state.count);
  // console.log(count)
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>{}}>DEC</button>
      <button onClick={()=>{}}>INC</button>
    </div>
  );
}

export default App;
