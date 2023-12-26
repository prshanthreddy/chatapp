import React from 'react'

const input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder="Type a message" />
      <div className="send">
      <input type="file" id="file" style={{display:"none"}} />       
          <label htmlFor="file">
            <img src="https://img.icons8.com/material-rounded/24/000000/attach.png" alt="" />
          </label>
        <img src="https://img.icons8.com/material-rounded/24/000000/happy.png" alt="" />
         
        <button>Send</button>
      </div>
    </div>
  )
}

export default input