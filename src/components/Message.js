import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesLeft, faAnglesRight, faL} from "@fortawesome/free-solid-svg-icons";
import './Css/Message.css'
import Profile from '../assets/img/profile.svg'
import Online from '../assets/img/Online.svg'
import {useEffect, useState} from "react";
import Onnav from '../Store';
import Chat from "./Chat.js";
import axios from "axios";

function Message() {
    console.log('Message page')
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/is_session',{credentials: 'include'}).then((result)=>{console.log(result.data)})
    },[])
    let [order, setorder] = useState(0)
    let {nav, SetNav} = Onnav();
    let [users] = useState([
        {
            name: '김지한',
            last_message: '난 오늘 코딩하러 스타벅스 갈거야',
            online: true
        }, {
            name: 'Cris',
            last_message: 'I want to talk more, but my pronunciation',
            online: false
        }, {
            name: 'Velo',
            last_message: '리액트는 좋은 라이브러리 입니다',
            online: false
        }, {
            name: 'User',
            last_message: '웹개발 외주를 받고싶습니다 하지만 실력이',
            online: true
        }, {
            name: 'User1',
            last_message: '뭐하지 뭐하지 뭐하지',
            online: true
        }, {
            name: 'User2',
            last_message: '코딩은 재밌다',
            online: false
        }, {
            name: 'User3',
            last_message: '웹개발 외주를 받고싶습니다 하지만 실력이',
            online: false
        }, {
            name: 'User4',
            last_message: '웹개발 외주를 받고싶습니다 하지만 실력이',
            online: false
        }, {
            name: 'User5',
            last_message: '웹개발 외주를 받고싶습니다 하지만 실력이',
            online: true
        }, {
            name: 'User6',
            last_message: '웹개발 외주를 받고싶습니다 하지만 실력이',
            online: false
        }, {
            name: 'User7',
            last_message: '웹개발 외주를 받고싶습니다 하지만 실력이',
            online: true
        }, {
            name: 'User8',
            last_message: '웹개발 외주를 받고싶습니다 하지만 실력이',
            online: false
        }, {
            name: 'User9',
            last_message: '웹개발 외주를 받고싶습니다 하지만 실력이',
            online: false
        }, {
            name: 'User10',
            last_message: '웹개발 외주를 받고싶습니다 하지만 실력이',
            online: true
        }, {
            name: 'User11',
            last_message: '웹개발 외주를 받고싶습니다 하지만 실력이',
            online: true
        }, {
            name: 'User12',
            last_message: '웹개발 외주를 받고싶습니다 하지만 실력이',
            online: false
        }, {
            name: 'User13',
            last_message: '웹개발 외주를 받고싶습니다 하지만 실력이',
            online: true
        }
    ])
    let [target, settarget] = useState(users[parseInt(order)]);
    let [Chat_tab, setChat_tab] = useState(false)

    return (
        <div className="Message-body">
            <div className="user-tab">
                <FontAwesomeIcon
                    icon={faAnglesRight}
                    className='ut-back'
                    onClick={() => {
                        SetNav(!nav)
                    }}/>
                <h4 className="ut-title">Messages</h4>
                <div className="ut-items">

                    {
                        users.map((a, i) => {
                            return (
                                <div
                                    key={i}
                                    className={'ut-item' + (
                                        order == i
                                            ? ' ut-on'
                                            : ''
                                    )}
                                    onClick={() => {
                                        setorder(i)
                                        settarget(a)
                                        setChat_tab(true)
                                        console.log(Chat_tab)
                                    }}>
                                    <div>
                                        {
                                            a.online
                                                ? <img src={Online} className="ut-active"/>
                                                : ''
                                        }
                                        <img src={Profile} className="ut-profile"/>
                                    </div>
                                    <div className="profile-content">
                                        <h4>{a.name}</h4>
                                        <p>{a.last_message}</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
            <Chat name={target.name} Chat_tab={Chat_tab} set={setChat_tab}/>
        </div>

    )
}

export default Message;