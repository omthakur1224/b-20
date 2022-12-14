import axios from "axios";
import { ADD_POST, DELETE_POST, GET_POST, UPDATE_POST } from "./post.types";

export const addPOST=(payload)=>({
    type:ADD_POST,
    payload:{
        id:Date.now(),
        ...payload
        }   
});
export const updatePOST=(payload)=>({type:UPDATE_POST,payload});
export const deletePOST=(payload)=>({type:DELETE_POST,payload});

export const getPost=()=>async(dispatch)=>{
    let res =await axios.get('http://localhost:8080/posts')
            let data= res.data;
            console.log(data);
         dispatch({
                type:GET_POST,
                payload:data
            })
}