import { useEffect , useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
// import {useState} from 'react'
function App() {
  const [data,setData]=useState([]);
useEffect(()=>{
  axios.get('http://localhost:8000/products').then((res)=>{
    console.log(res.data,"res")
    setData(res.data);
  })
},[data])
  return (
    <div className="App">
        <h1>Products</h1>
   </div>
  );
}

export default App;
