import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  // let [creds, setCreds]=useState("");
  const dispatch=useDispatch();
  let [data,setData]=useState({})
  return (
    <>
      <form>
        <input placeholder="enter email" data-cy="login-email" type="text" id="email" onChange={(e)=>{let {id,value}=e.target;
        setData({...data,[id]:value})}}
        />
        <input placeholder="enter password" data-cy="login-password" type='text'  id="password" onChange={(e)=>{let {id,value}=e.target;setData({...data,[id]:value})}}/>
        <button data-cy="login-submit"  onClick={()=>dispatch(data)}>Submit</button>
      </form>
    </>
  );
};

export default Login;
