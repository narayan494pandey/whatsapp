import React,{useState} from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicIcon from "@material-ui/icons/Mic"
import axios from "./axios";
function Chat({messages}) {
    const [input, setInput] = useState('');
    const sendMessage = async (e) =>{
        e.preventDefault();
       await axios.post('/messages/new',{
            name:'Demon',
            message:input,
            timestamp: new Date().toUTCString(),
            received:true
        });
        setInput("");

    }

    return (
        <div className="chat">
            <div className="chat__Header">
                <Avatar />
                <div className="chat__HeaderInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                   
                </div>
            </div>
            <div className="chat__body">
                
                {messages.map((message) =>(
                    <p  key={message._id} className={`chat__message ${message.received && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                                {message.message}
                        <span className="chat__timestamp">
                        {message.timestamp}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticon /> 
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button onClick={sendMessage}
                        type="submit">
                        Send a message
                        </button>
                </form>
                <MicIcon />
                </div>
            </div>
    )
}

export default Chat
