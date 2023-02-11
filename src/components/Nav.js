import './Css/Nav.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAnglesLeft,
    faGear,
    faHouse,
    faMessage,
    faRightFromBracket,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import Profile from '../assets/img/profile.svg'
import {useState} from 'react';
import Onnav from '../Store';

function Nav() {
    let {nav, SetNav} = Onnav();
    let navigate = useNavigate()  
    let items = [
        {
            icon: faMessage,
            name: 'Message',
            route: '/'
        }, {

            icon: faRightFromBracket,
            name: 'Login',
            route: '/login'
        }, {
            icon: faUser,
            name: 'Profile',
            route: '/profile'
        }, {
            icon: faGear,
            name: 'Setting',
            route: '/setting'
        }
    ]

    let [menu, setmenu] = useState(0)

    return (
        <div
            className={'nav' + (
                nav == true
                    ? ' nav-on'
                    : ''
            )}>
            <FontAwesomeIcon
                icon={faAnglesLeft}
                className='nav-back'
                onClick={() => {
                    SetNav(!nav)
                }}/>
            <div className="profile">
                <img src={Profile}/>
            </div>
            <div className="items">
                {
                    items.map((a, i) => {
                        return (
                            <div
                                key={i}
                                className={'item' + (
                                    menu == i
                                        ? ' on-item'
                                        : ''
                                )}
                                onClick={() => {
                                    navigate(a.route)
                                    setmenu(i)
                                }}>
                                <FontAwesomeIcon icon={a.icon} className='item-icon'/>
                                <h4>{a.name}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Nav;