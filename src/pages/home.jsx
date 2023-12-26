import React from "react";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";
import "../styles/Register.css";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat /> 
            </div>

        </div>
    );
    }

export default Home;