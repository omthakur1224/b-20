import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logout } from "../redux/auth/auth.action";

const Navbar = () => {
  // const { isAuth,logout } = useContext(AuthContext);
  const auth=useSelector((store=>store.auth.auth))
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const handleLoginClick = () => {
    // login screen
    if (auth) {
      dispatch(logout())
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };
  return (
    <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
      Navbar:
      <Link to="">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/feeds">Feeds</Link>
      <button onClick={handleLoginClick}>
        {/* Spacer */}
        {auth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
