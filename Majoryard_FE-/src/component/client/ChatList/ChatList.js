import React from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import "./ChatList.css";

const ChatList = ({ subscribers, searchQuery }) => {
  // 검색어에 맞게 데이터를 필터링하는 함수
  const filteredSubscribers = subscribers.filter(subscriber =>
    subscriber.name && searchQuery ? subscriber.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
  );

  return (
    <div className="listform">
      <ScrollToBottom className="chatlist-container">
        {filteredSubscribers.map((subscriber, index) => (
          <div className="userChat" key={index}>
            <span className="chatsubscriberlist">
              <img src={subscriber.image} alt="User Chat" className="listimg" />
              <span className="chatlistname">{subscriber.name}</span>
              <span className="chatlistcontent">{subscriber.content}</span>
              <span className="chattime">{subscriber.time}</span>
            </span>
          </div>
        ))}
      </ScrollToBottom>
    </div>
  );
};

export default ChatList;
