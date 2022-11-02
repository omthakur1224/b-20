import axios from "axios";
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types"
// Auth Actions here
export const signin=(creds)=>async(dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING,payload:true})
    try{

        let response= await axios.post('https://reqres.in/api/login',creds);
        console.log(response.data,'response')
        dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:response.data.token})
    }
    catch(err){
        dispatch({type:AUTH_SIGN_IN_ERROR,payload:true})
    }
}
export const logout=()=>({type:AUTH_SIGN_OUT})