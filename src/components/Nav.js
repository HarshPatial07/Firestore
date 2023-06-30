import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
        try {            
            await logOut(); 
            navigate("/signin")           
        } catch (error) {
            console.log(error);
        }
    };
 
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <h1 className="text-white">Firebase Google</h1>
                {user ? (
                    <button className="btn-logout" onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/signin" className="text-white">
                        Login
                    </Link>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
