import React from 'react';
import './App.css';
import ChatBox from './ChatBox';
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="app">
      <div className="app__body">
      <Sidebar />
      <ChatBox />
      
      </div>
        
    </div>
  );
}

export default App;
