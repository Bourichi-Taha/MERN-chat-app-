import React from 'react'
import '../assets/css/style.css';



const MessageOther = () => {
  return (
    <div className="message-other-container">
        <div className="conversation-container">
            <p className="con-icon">O</p>
            <div className="mo-content">
                <p className="mo-lastMessage">message</p>
                <p className="self-timeStamp">12:00am</p>
            </div>
        </div>
    </div>
  )
}

export default MessageOther