// import React from "react";
// import "../styles/Register.css";
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// const Login = () => {
//     const [err, setErr] = useState(null);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const email = e.target[0].value;
//         const password = e.target[1].value;

//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             navigate("/");
//         } catch (error) {
//             setErr(true);
//         }
//     };

//     return (
//         <div className="formContainer">
//             <div className="formWrapper">
//                 <span className="logo">Chat App</span>
//                 <span className="desc">Login</span>
//                 <form onSubmit={handleSubmit}>
//                     <input type="email" placeholder="Email" />
//                     <input type="password" placeholder="Password" />
//                     <button type="submit">Sign In</button>
//                 </form>
//                 <span className="desc">
//                     <Link to="/register">Don't have an account? Register</Link>
//                 </span>
//                 <span className="error">{err && "Something went wrong!"}</span>
//             </div>
//         </div>
//     );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
