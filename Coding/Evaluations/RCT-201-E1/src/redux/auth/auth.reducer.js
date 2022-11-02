import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types";

// Note: Do not update/change the initial state
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState,{type,payload}) => {
  switch(type){
    case AUTH_SIGN_IN_LOADING :
      return {...state,loading:payload}

    case AUTH_SIGN_IN_SUCCESS :
      return {...state, data:{token:payload, isAuthenticated:true},loading:false}

    case AUTH_SIGN_IN_ERROR :
      return {...state, error:true}

    case AUTH_SIGN_OUT:
      return {...state, data:{token:"",isAuthenticated:false}}

    default:
      return state;
  }
};
