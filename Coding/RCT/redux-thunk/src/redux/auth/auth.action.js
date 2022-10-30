import axios from "axios";
import { LOG_IN, LOG_OUT } from "./auth.types";

// export const isAuth=(payload)=>({type:LOG_IN,payload});
export const logout=(payload)=>({type:LOG_OUT,payload});

export const login=(creds)=>async(dispatch)=>{
    console.log(creds,'creds')
    let res=await axios.post('https://reqres.in/api/login',creds);
    // console.log(res,'loginres')
    dispatch({type:LOG_IN,payload:res.data.token});
    console.log(res.data.token,"tokennnnn")
    // return res.data.token;
}