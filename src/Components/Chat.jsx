// import React, { useContext } from "react";
// import Messages from "./Messages";
// import Input from "./Input";
// import { ChatContext } from "../context/ChatContext";

// const Chat = () => {
//   const { data } = useContext(ChatContext);

//   return (
//     <div className="chat">
//       <div className="chatInfo">
//         <span>{data.user?.displayName}</span>
//         <div className="chatIcons">
//           <img src="https://img.icons8.com/material-rounded/24/000000/phone.png" alt="" />
//           <img src="https://img.icons8.com/material-rounded/24/000000/video-call.png" alt="" />
//           <img src="https://img.icons8.com/material-rounded/24/000000/info.png" alt="" />
//         </div>
//       </div>
//         <Messages />
//         <Input />
//     </div>
//   )
// }

// export default Chat
import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <img src="https://img.icons8.com/material-rounded/24/000000/phone.png" alt="" />
           <img src="https://img.icons8.com/material-rounded/24/000000/video-call.png" alt="" />
           <img src="https://img.icons8.com/material-rounded/24/000000/info.png" alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;