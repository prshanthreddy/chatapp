import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
        setErr(false); // Reset error state if user is found
      } else {
        setUser(null);
        setErr(true); // Set error if no user found
      }
    } catch (error) {
      setErr(true); // Set error if an exception occurs
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {user && (
        <div className="userChat">
          <img
            src={user.photoURL}
            alt={`Profile of ${user.displayName}`}
          />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
            <p>Hello</p>
          </div>
        </div>
      )}
      {err && <span className="error">User not found!</span>}
    </div>
  );
};

export default Search;
