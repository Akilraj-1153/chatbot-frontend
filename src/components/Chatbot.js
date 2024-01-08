// Chatbot.js

import React from 'react';
import './Chatbot.css';

function Chatbot({ img, onClick }) {
  return (
    <div onClick={onClick} className='chatbot'>
      <img src={img} alt='Chatbot' />
    </div>
  );
}

export default Chatbot;
