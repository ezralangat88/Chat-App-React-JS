import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
  
const ChatFeed = (props) => {
  //Destructuring features from props
  const { chats, activeChat, userName, messages} = props;

  //Finding current chat
  const chat = chats && chats[activeChat];

  //Function for rendering / generating Messages
  const renderMessages = () => {

      const keys = Object.keys(messages);
      console.log(keys);

    
  }; 

  renderMessages()
  
    
  return (
    <div>
        Chat Feed
    </div>
  );
};

export default ChatFeed;
