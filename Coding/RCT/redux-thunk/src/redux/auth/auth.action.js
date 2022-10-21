import axios from "axios";
import { LOG_IN, LOG_OUT } from "./auth.types";

// export const isAuth=(payload)=>({type:LOG_IN,payload});
export const logout=(payload)=>({type:LOG_OUT,payload});

export const login=async(dispatch)=>{
    let res=await axios.post('https://reqres.in/api/login');
    dispatch({type:LOG_IN,payload:res.data});
    return res.data;
}