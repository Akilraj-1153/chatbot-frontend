// App.js

import React, { useState } from 'react';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import chatbotimg  from './Assets/chatbot.jpg';

function App() {
  const [chatbotClicked, setChatbotClicked] = useState(false);

  const handleChatbotClick = () => {
    setChatbotClicked(!chatbotClicked);
  };

  return (
    <div>
      <Chatbot img={chatbotimg} onClick={handleChatbotClick} />
      {chatbotClicked && <Home />}
    </div>
  );
}

// function App() {
//   // 

//   return (
//     <div>
//       <Home></Home>
//     </div>
//   );
// }

export default App;
