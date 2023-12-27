import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
        />
        <span>Just Now</span>
      </div>
        <div className="messageContent">
          <p>Hello</p>
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
          />
        </div>
      </div>
  );
};

export default Message;
