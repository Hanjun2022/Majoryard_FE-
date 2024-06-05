import React, { useState } from 'react';
import profile from "../../../../api/user.json";
import './ChatHeaderBar.css';
import searchIcon from "../ChatNav/img/search.png";
import ChatList from '../../ChatList/ChatList.js'; 

const ChatHeaderBar = () => {
  const { user_name, user_pic } = profile; 
  const [searchQuery, setSearchQuery] = useState("");


  const handleSearch = (event) => {
    setSearchQuery(event.target.value); 
  };



  return (
    <div className="chatHeaderBar">
      <div className="profile">
        <img src={user_pic} className="UserProfilePic" alt="User Profile" />
        <div className="UserInfo">
          <h3>{user_name}</h3>
        </div>
      </div>
 
    </div>
    
  );
};

export default ChatHeaderBar;
