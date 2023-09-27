import React from 'react'
import "../assets/css/chatbot.css"
import person from "../assets/images/person1.jpg"
import { TextField } from '@mui/material'
const Chatbot = () => {
    return (
        <div className="chatbot-container">
            {/* <div className="cbc-left"></div> */}
            <div className="cbc-main">
                <div className="cbc-messages-container">
                    <div className="cbc-message-user">
                        <div className="cbc-mu-image">
                            {/* <img src={person} alt="" className='cbc-mu-image-item'/> */}
                        </div>
                        <div className="cbc-mu-text">
                            <p className="cbc-mu-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-bot">
                        <div className="cbc-mb-image">
                            {/* <img src={person} alt="" className='cbc-mu-image-item'/> */}
                        </div>
                        <div className="cbc-mb-text">
                            <p className="cbc-mb-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-user">
                        <div className="cbc-mu-image">
                            {/* <img src={person} alt="" className='cbc-mu-image-item'/> */}
                        </div>
                        <div className="cbc-mu-text">
                            <p className="cbc-mu-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-bot">
                        <div className="cbc-mb-image">
                            {/* <img src={person} alt="" className='cbc-mu-image-item'/> */}
                        </div>
                        <div className="cbc-mb-text">
                            <p className="cbc-mb-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-user">
                        <div className="cbc-mu-image">
                            {/* <img src={person} alt="" className='cbc-mu-image-item'/> */}
                        </div>
                        <div className="cbc-mu-text">
                            <p className="cbc-mu-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-bot">
                        <div className="cbc-mb-image">
                            {/* <img src={person} alt="" className='cbc-mu-image-item'/> */}
                        </div>
                        <div className="cbc-mb-text">
                            <p className="cbc-mb-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-user">
                        <div className="cbc-mu-image">
                            {/* <img src={person} alt="" className='cbc-mu-image-item'/> */}
                        </div>
                        <div className="cbc-mu-text">
                            <p className="cbc-mu-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-bot">
                        <div className="cbc-mb-image">
                            {/* <img src={person} alt="" className='cbc-mu-image-item'/> */}
                        </div>
                        <div className="cbc-mb-text">
                            <p className="cbc-mb-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-user">
                        <div className="cbc-mu-image">
                            {/* <img src={person} alt="" className='cbc-mu-image-item'/> */}
                        </div>
                        <div className="cbc-mu-text">
                            <p className="cbc-mu-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-bot">
                        <div className="cbc-mb-image">
                            {/* <img src={person} alt="" className='cbc-mu-image-item'/> */}
                        </div>
                        <div className="cbc-mb-text">
                            <p className="cbc-mb-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cbc-form">
                    <div className="cbc-form-input-container">
                        <div className="cbc-fi-item">
                            <TextField
                                label="Send a message ..."
                                className='cbc-fi-item-textField'
                                multiline
                                maxRows={4}
                                fullWidth
                                InputProps={{
                                    style: {
                                        textAlignVertical: 'top', // Align text to the top
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="cbc-right"></div> */}
        </div>
    )
}

export default Chatbot