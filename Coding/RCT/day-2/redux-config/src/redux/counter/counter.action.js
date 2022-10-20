import { DEC, INC } from "./counter.types";

export const increment=(payload)=>({type:INC,payload});
export const decrement=(payload)=>({type:DEC,payload});