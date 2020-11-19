import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'


function Chat() {
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
                <p className="chat__message">
                 <span className="chat__name">Narayan</span>
                         This is message
                <span className="chat__timestamp">
                  {new Date().toUTCString()}
                </span>
                
                </p>
                <p className="chat__message">
                 <span className="chat__name">Narayan</span>
                         This is message
                <span className="chat__timestamp">
                  {new Date().toUTCString()}
                </span>
                
                </p>
                <p className="chat__message">
                 <span className="chat__name">Narayan</span>
                         This is message
                <span className="chat__timestamp">
                  {new Date().toUTCString()}
                </span>
                
                </p>
            </div>
        </div>
    )
}

export default Chat
