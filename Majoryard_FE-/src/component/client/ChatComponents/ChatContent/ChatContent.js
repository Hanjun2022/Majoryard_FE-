
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import user from "../../../../api/user.json";

import './ChatContent.css';

const ChatContent = () => {

    const [userId, setUserId] = useState({});
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        setUserId(user);
    }, []);

    const sendMessage = () => {
        if (currentMessage !== "") {
            const messageData = {
                author: userId.user_name,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + 
                      ":" + 
                      new Date(Date.now()).getMinutes(),
            };

            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    return (
        <div className="ChatContent">
            <div className="ChatHeader">
             
                <img src={userId.user_pic} alt="User Profile" className="UserProfilePic" />
                <div className="UserInfo">
                    <h3>{userId.user_name}</h3>
                </div>
            </div>
            <div className="Chat-Body">
                <ScrollToBottom className="messageContent">
                    {messageList.map((messageContent, index) => {
                        return (
                            <div
                                key={index}
                                className="message"
                                id={userId.user_name === messageContent.author ? "you" : "other"}
                            >
                                <div>
                                    <div className="message-content">
                                        <p>{messageContent.message}</p>
                                    </div>
                                    <div className="message-info">
                                        <p id="author">{messageContent.author}</p>
                                        <p id="time">{messageContent.time}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </ScrollToBottom>
            </div>

            <div className="chat-footer">
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="Hey..."
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }}
                    onKeyDown={(event) => {
                        event.key === "Enter" && sendMessage();
                    }}
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    );
}

export default ChatContent;