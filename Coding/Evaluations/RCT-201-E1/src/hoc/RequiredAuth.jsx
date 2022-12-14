// import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  // const { isAuth } = useContext(AuthContext);
  const auth=useSelector(store=>store.isAuth.data.isAuthenticated)
  // const 
  const { pathname } = useLocation();

  if (auth) {
    return children;
  } else {
    return (
      // Redirecting to Login page
      <Navigate
        to="/login"
        state={{ from: pathname }}
        replace
        // spacer
      />
    );
  }
};

export default RequireAuth;
