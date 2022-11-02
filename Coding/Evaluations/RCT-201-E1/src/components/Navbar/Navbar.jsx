import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Login from "../../pages/Login";
import { logout } from "../../redux/auth/auth.actions";
const Navbar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const isAuth=useSelector(store=>store.isAuth.data.isAuthenticated)
  const handleLoginClick = () => {
    // login screen
    if (isAuth) {
      dispatch(logout())
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar" style={{display:"flex",justifyContent:"space-around"}}>
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
            <Link to='/home' data-cy="navbar-home-link"> Home</Link>
            <Link to='/products'>Products</Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count"></div>
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {!isAuth?"Login":"Logout"}
          </button>
      </div>
    </div>
  );
};

export default Navbar;
