import React from 'react';
import './App.css';
import ChatBox from './ChatBox';
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <ChatBox />
    </div>
  );
}

export default App;
