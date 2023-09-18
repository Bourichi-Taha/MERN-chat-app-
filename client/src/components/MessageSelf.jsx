import React from 'react'
import '../assets/css/style.css';


const MessageSelf = () => {
  return (
    <div className="message-self-container">
        <div className="messageBox">
            <p>my message</p>
            <p className="self-timeStamp">12:01am</p>
        </div>
    </div>
  )
}

export default MessageSelf