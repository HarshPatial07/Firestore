import React, { useEffect } from "react";
import { UserAuth } from "./AuthContext";
import "../Styles/Signin.css"
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const { user, facebookSignIn, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleFacebookSignin = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  const renderButton = () => {
    if (user) {
      return (
        <div className="btn">
          <button className="btn-logout" onClick={logOut} >
            Logout
          </button>
          <hr />
        </div>
      );
    } else {
      return (
        <div className="btn">
          <button className="btn-login" onClick={handleFacebookSignin}>
            Login with Facebook
          </button>
          <hr />
        </div>
      );
    }
  };
  return (
    <div className="facebook-container">
      <div className="firebase-auth">
      <h2 className="text">Firebase Auth</h2>
      <div>
        <p className="user-email"><u>Welcome: {user && user.email}</u></p>
      </div>
      
      <div className="text_btn">       
        {renderButton()}
      </div>
      </div>
    </div>
  );
};

export default Signin;
