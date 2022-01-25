import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
  
const ChatFeed = (props) => {
  //Destructuring features from props
  const { chats, activeChat, userName, messages} = props;

  //Finding current chat
  const chat = chats && chats[activeChat];

  console.log(chat, userName, messages );
    
  return (
    <div>
        Chat Feed
    </div>
  );
};

export default ChatFeed;
