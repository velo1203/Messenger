import './Css/Signup.css'
import Profile from '../assets/img/profile.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import Onnav from '../Store';
import {useState} from 'react';
import axios from 'axios'
import {Navigate, useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";


function Login() {

    let navigate = useNavigate()

    let {nav, SetNav} = Onnav();
    let [Inputemail, setInputemail] = useState('')
    let [Pass1, setPass1] = useState('')
    let [Pass2, setPass2] = useState('')
    let [Name, SetName] = useState('')

    return (
        <div className="Signup">
            <FontAwesomeIcon
                icon={faAnglesRight}
                className='sg-back'
                onClick={() => {
                    SetNav(!nav)
                }}/>
            <div className="sg-container">
                <div className="sg-title">
                    <img src={Profile}/>
                    <h4>Signup</h4>
                </div>
                <div className="sg-form">
                    <div>
                        <input
                            name='name'
                            className='sg-input'
                            type='text'
                            placeholder='Name'
                            onChange={(e) => {
                                SetName(e.target.value)
                            }}></input>
                    </div>
                    <div>
                        <input
                            className='sg-input'
                            type='email'
                            placeholder='Email'
                            onChange={(e) => {
                                setInputemail(e.target.value)
                            }}></input>
                    </div>
                    <div>
                        <input
                            name='pw'
                            className='sg-input'
                            type='Password'
                            placeholder='Password'
                            onChange={(e) => {
                                setPass1(e.target.value)
                            }}></input>
                    </div>
                    <div>
                        <input
                            className='sg-input'
                            type='Password'
                            placeholder='Password Check'
                            onChange={(e) => {
                                setPass2(e.target.value)
                            }}></input>
                    </div>
                    <div>
                        <button
                            className='sg-submit sg-btn'
                            onClick={() => {
                                
                                console.log('ㅁㄴㅇㄹ')
                                if (Inputemail != '' && Pass1 != '' && Pass2 != '') {
                                    axios.post("http://127.0.0.1:5000/signup", {
                                            Name :Name,
                                            Inputemail: Inputemail,
                                            Pass1: Pass1,
                                            Pass2: Pass2
                                        },{
                                            withCredentials: true
                                        })
                                        .then(function (result) {
                                            Swal.fire({icon: "success", title: "success", text: result.data})
                                            navigate('/login')
                                        })
                                        .catch(function (error) {
                                            Swal.fire({icon: "warning", title: "Error", text: error.response.data})
                                    })
                            }}}>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;