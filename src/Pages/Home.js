import React from 'react'
import { UserAuth } from '../components/AuthContext';
import "../Styles/Home.css";
const Home = () => {
    const {user } = UserAuth();
  
    return (
        <div className="home-contianer">
            <div className="home-card">
            <h1>Home Page</h1>
            <div>
                <p className="name">Welcome: {user && user.email}</p>
            </div>     
            </div>       
        </div>
    )
}

export default Home