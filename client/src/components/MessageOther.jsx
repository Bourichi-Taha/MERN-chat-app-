import React from 'react'
import '../assets/css/style.css';
import { baseUrl } from '../app/api/apiSlice';



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
            {Array.isArray(message.upload) ?
              <div className='img-pack' style={{ height: 'auto', width: '100%', display: 'flex', flexWrap: 'wrap', rowGap: 10, columnGap: 10 }}>
                {
                  message.upload.map((upl, index) => {
                    return (
                      <img alt={upl.filename} className='img-single' key={index} src={`${baseUrl}/${upl.path}`} style={{ height: 80, width: 80, objectFit: 'contain', flex: .5, maxWidth: '50%' }} />
                    )
                  })
                }
              </div>
              :
              <img alt={message.upload.filename} src={`${baseUrl}/${message.upload.path}`} style={{ height: 80, width: 80, objectFit: 'contain' }} />
            }

            <p className="self-timeStamp">12:00am</p>
          </div>
        </div>
      </div>
    )
  }
  return render();
}

export default MessageOther