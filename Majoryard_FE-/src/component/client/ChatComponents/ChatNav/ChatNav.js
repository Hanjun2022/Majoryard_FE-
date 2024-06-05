/*import React, { Component } from 'react';
import './ChatNav.css';
import ChatList from '../../ChatList/ChatList';

export default class ChatNav extends Component {
    render() {
        return (
            <div className="chatlist">
                <p className="chatword">chatting room</p>
                <div className="chatlist_items">
                    <ChatList />
                </div>
            </div>
        );
    }
}

*/
import React, { Component } from 'react';
import searchIcon from './img/search.png';

import './ChatNav.css';
import ChatList from '../../ChatList/ChatList';

export default class ChatNav extends Component {
   
    handleSearchChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    };
    setSubscribers = (subscribers) => {
        this.setState({ subscribers });
    };

    render() {
        return (
                <div className="chatlist">
                     <p className="chatword">chatting room</p>
                    <div className="chatList__search">
                        <div className="search_wrap">
                            <input type="text" placeholder="Search Here" required />
                            <button className="search-btn">
                                <img src={searchIcon} alt="Search" className="Searchpic" />
                            </button>
                        </div>
                    </div>
                    <div className="chatlist_items">
                       <ChatList />
                    </div>
                </div>
           
        );
    }
}