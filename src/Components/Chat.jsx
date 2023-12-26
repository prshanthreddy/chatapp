import React from 'react'
import Messages from './Messages'
import Input from './input'

const Chat = () => {
  return (
    <div className='chat'> 
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatInfoIcons">
          <img src="https://img.icons8.com/material-rounded/24/000000/phone.png" alt="" />
          <img src="https://img.icons8.com/material-rounded/24/000000/video-call.png" alt="" />
          <img src="https://img.icons8.com/material-rounded/24/000000/info.png" alt="" />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat