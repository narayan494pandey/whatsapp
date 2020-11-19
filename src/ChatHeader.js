import React from 'react'
import './ChatHeader.css'
import { Avatar } from '@material-ui/core'
function ChatHeader() {
    return (
        <div className="chatHeader">
            <Avatar />
            <div className="ChatHeader__info">
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default ChatHeader
