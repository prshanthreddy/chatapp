import React from 'react'

const Search = () => {
  return (
    <div className='search'> 
      <div class Name="seacrhForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1200"alt="" />
        <div className="userChatInfo">
          <span>Jane</span> 
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1200"alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div> 
    </div>
  )
}

export default Search