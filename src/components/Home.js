// Home.jsx

import React, { useState } from 'react';
import './Home.css';
import { BsSend } from 'react-icons/bs';

function Home() {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([
        { type: 'received', text: 'Hello! How can I help you today?' },
    ]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, { type: 'sent', text: inputValue }]);
            setInputValue('');
        }
    };

    return (
        <div>
            <div className="outbox">
                <div className="headder">
                    <div className="profile">
                        <div className="profilepic"></div>
                    </div>
                </div>
                <div className="chatbox">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.type}`}
                            style={{ alignSelf: message.type === 'sent' ? 'flex-end' : 'flex-start' }}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="inputbox">
                    <input
                        className="inipbox"
                        placeholder="Ask what you want"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSendMessage();
                            }
                        }}
                    />
                    <button className="searchbtn" onClick={handleSendMessage}>
                        <BsSend size={30}></BsSend>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
