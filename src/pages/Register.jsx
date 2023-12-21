import React from "react";
import "../styles/Register.css";
import Add from "../images/profilepicture.png";

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat App</span>
                <span className="desc">Register</span>
                <form>
                    <input type="text" placeholder="Display Name" />
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input style={{display:"none"}} type="file" id="file" placeholder="Profile Picture" />
                    <label htmlFor="file">
                        <img src={Add} alt="" className="profileImg" />
                        <span className="profileImgText">Add Profile Picture</span>
                    </label>
                    <button type="submit">Register</button>
                </form>
                <span className="desc">Already have an account? Login</span>
            </div>
        </div>
    );
    }
export default Register;
