import axios from "axios";
import { GET_FEEDS, DELETE_FEEDS, UPDATE_FEEDS, POST_FEEDS } from "./feeds.types";

export const addFeed=(payload)=>({
    type:POST_FEEDS,
    payload:{
        id:Date.now(),
        ...payload
        }   
});
export const updateFeeds=(payload)=>({type:UPDATE_FEEDS,payload});
export const deleteFeeds=(payload)=>({type:DELETE_FEEDS,payload});

// export const getFeeds=async()=>{
//     let res =await axios.get('http://localhost:8000/todos')
//             let data= res.data;
//             console.log(data);
//             return {
//                 type:GET_FEEDS,
//                 payload:data
//             }
// }
export const getFeeds=()=>async(dispatch)=>{
    let res =await axios.get('http://localhost:8080/feeds')
            let data= res.data;
            console.log(data);
           dispatch({type:GET_FEEDS,payload:data})
}