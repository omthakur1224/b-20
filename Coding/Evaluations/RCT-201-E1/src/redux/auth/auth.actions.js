import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types"
// Auth Actions here
export const signin=(creds)=>async(dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING,payload:true})
    try{

        let response= await fetch('https://reqres.in/api/login',creds);
        console.log(response)
        dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:response.data})
    }
    catch(err){
        dispatch({type:AUTH_SIGN_IN_ERROR,payload:true})
    }
}
export const logout=(payload)=>({type:AUTH_SIGN_OUT,payload})