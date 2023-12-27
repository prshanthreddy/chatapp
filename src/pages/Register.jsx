import React from "react";
import "../styles/Register.css";
import Add from "../images/profilepicture.png";
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth,storage} from "../firebase.js";
import { useState } from "react";
import {ref,uploadBytesResumable,getDownloadURL, } from "firebase/storage";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../firebase.js";
import {serverTimestamp} from "firebase/firestore";

const Register = () => {
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const distplayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        try{
            const res=await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, `profile/${res.user.email}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => {
                    setError(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                        await updateProfile(res.user, {
                            displayName: distplayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            distplayName,
                            email,
                            photoURL: downloadURL,
                            uid: res.user.uid,
                            timestamp: serverTimestamp(),
                        });
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                    });
                }
            );

        }
        catch(err){
            setError(true);
        }

    };
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat App</span>
                <span className="desc">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Display Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input style={{display:"none"}} type="file" id="file" placeholder="Profile Picture" />
                    <label htmlFor="file">
                        <img src={Add} alt="" className="profileImg" />
                        <span className="profileImgText">Add Profile Picture</span>
                    </label>
                    <button type="submit">Register</button>
                    {error && <span className="error">Something went wrong!</span>}
                </form>
                <span className="desc">Already have an account? Login</span>
            </div>
        </div>
    );
    }
export default Register;
