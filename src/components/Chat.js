import './Css/Chat.css'
import Profile from '../assets/img/profile.svg'
import { useEffect, useRef } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight, faL} from "@fortawesome/free-solid-svg-icons";


function Chat(props) {
    let scrollRef = useRef();
    useEffect(()=>{
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    },[props.Chat_tab])


    return (
        <div className={'Chat ' + (props.Chat_tab == true ? ' chat-on': '')}>
            <div className="ch-header">
                <div className="ch-item">
                <FontAwesomeIcon
                        icon={faAnglesLeft}
                        className='ch-back'
                        onClick={() => {
                            props.set(false)
                        }}/>
                    <img src={Profile} className="ch-profile"/>
                    <h4>{props.name}</h4>
                </div>
            </div>
            <div className="chat-box" ref={scrollRef}>
                <div className='chat-message'>
                    <p>안녕</p>
                </div>
                <div className='user chat-message'>
                    <p>안녕 반가워</p>
                </div>
                <div className='user chat-message'>
                    <p>뭐하고있었니</p>
                </div>
                <div className='chat-message'>
                    <p>코딩하고있었어</p>
                </div>
                <div className='chat-message'>
                    <p>안녕</p>
                </div>
                <div className='user chat-message'>
                    <p>안녕 반가워</p>
                </div>
                <div className='user chat-message'>
                    <p>뭐하고있었니</p>
                </div>
                <div className='chat-message'>
                    <p>코딩하고있었어</p>
                </div>
                <div className='chat-message'>
                    <p>안녕</p>
                </div>
                <div className='user chat-message'>
                    <p>안녕 반가워</p>
                </div>
                <div className='user chat-message'>
                    <p>뭐하고있었니</p>
                </div>
                <div className='chat-message'>
                    <p>코딩하고있었어</p>
                </div>

            </div>
            <div className='chat-input'>
                <input className='ch-input' placeholder='Message..'></input>
                <button className='ch-btn'>Submit</button>
            </div>
        </div>
    )
}

export default Chat;