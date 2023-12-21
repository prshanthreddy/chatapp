import React from "react";
import "../styles/Register.css";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat App</span>
                <span className="desc">Login</span>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign In</button>
                </form>
                <span className="desc">Don't have account ? Register</span>
            </div>
        </div>
    );
    }
export default Login;
