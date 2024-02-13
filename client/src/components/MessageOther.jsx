import React from 'react'
import '../assets/css/style.css';



const MessageOther = ({ message }) => {
  const render = () => {
    if (message.type === 'text') {
      return (
        <div className="message-other-container">
          <div className="mo-container">
            <p className="con-icon">O</p>
            <div className="mo-content">
              <p className="mo-lastMessage">{message.content}</p>
              <p className="self-timeStamp">12:00am</p>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="message-other-container">
        <div className="mo-container">
            <p className="con-icon">O</p>
            <div className="mo-content">
                <p className="mo-lastMessage">message</p>
                <p className="self-timeStamp">12:00am</p>
            </div>
        </div>
    </div>
    )
  }
  return render();
}

export default MessageOther