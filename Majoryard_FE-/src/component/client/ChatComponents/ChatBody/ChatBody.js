
import React, { Component } from 'react';
import './ChatBody.css';
import ChatContent from '../ChatContent/ChatContent';
import ChatNav from '../ChatNav/ChatNav';

export default class ChatBody extends Component {
    render() {
        return (
            <div className="chatbody">
                <div className="chatnav">
                    <ChatNav />
                </div>
                <div className="chatcontent">
                    <ChatContent />
                </div>
            </div>
        );
    }
}