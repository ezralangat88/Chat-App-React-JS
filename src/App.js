import { ChatEngine } from 'react-chat-engine';
import './App.js';

import React from 'react';
import ChatFeed from './Components/ChatFeed';

const App = () => {
  return (
    
    <ChatEngine
			height='100vh'
			userName='Ezra'
			userSecret='Ezra'
			projectID='93503ec8-8184-4ec8-a539-d67be2a1f0ea'
      // To render your own component in the entire chat feed
     //Spread all props that are comming from chat engine
      renderChatFeed = {(ChatAppProps) => <ChatFeed  {...ChatAppProps}/>}
		/>

   );
};

export default App;
