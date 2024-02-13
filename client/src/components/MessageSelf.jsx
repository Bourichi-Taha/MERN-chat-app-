import React from 'react'
import '../assets/css/style.css';


const MessageSelf = ({ message }) => {
  const render = () => {
    if (message.type === 'text') {
      return (
        <div className="message-self-container">
          <div className="messageBox">
            <p>{message.content}</p>
            <p className="self-timeStamp">12:01am</p>
          </div>
        </div>
      )
    }
    return (
      <div className="message-self-container">
        <div className="messageBox">
          <p className="self-timeStamp">12:01am</p>
        </div>
      </div>
    )
  }
  return render();
}

export default MessageSelf