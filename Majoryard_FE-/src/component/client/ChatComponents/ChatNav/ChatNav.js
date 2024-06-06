import React, { useEffect, useState } from 'react';
import searchIcon from './img/search.png';
import './ChatNav.css';
import ChatList from '../../ChatList/ChatList';
import subscribe from "../../../../api/subscriber.json";

const ChatNav = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSubscribers(subscribe);
  }, []);

  return (
    <div className="chatlist">
      <p className="chatword">chatting room</p>
      <div className="chatList__search">
        <div className="search_wrap">
          <input 
            type="text" 
            placeholder="Search Here" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required 
          />
          <button className="search-btn" onClick={() => {}}>
            <img src={searchIcon} alt="Search" className="Searchpic" />
          </button>
        </div>
      </div>
      <div className="chatlist_items">
        <ChatList subscribers={subscribers} searchQuery={searchQuery}/>
      </div>
    </div>
  );
}

export default ChatNav;
