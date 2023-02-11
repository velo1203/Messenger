import './Css/Login.css'
import Profile from '../assets/img/profile.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Onnav from '../Store';
import {useNavigate, useParams} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

function Login() {
    let navigate = useNavigate()
    let {nav,SetNav} = Onnav();
    let [Email,SetEmail] = useState('')
    let [Pass,SetPass] = useState('')


    return (
        <div className="login">
            <FontAwesomeIcon icon={faAnglesRight} className='lg-back' onClick={()=>{
                SetNav(!nav)
            }}/>
            <div className="lg-container">
                <div className="lg-title">
                    <img src={Profile}/>
                    <h4>Login</h4>
                </div>
                <div className="lg-form">
                    <div>
                        <input type="email" className="lg-input" placeholder="Email" onChange={(e)=>{
                            SetEmail(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <input type="password" className="lg-input" placeholder="Password" onChange={(e)=>{
                            SetPass(e.target.value)
                        }}/>
                        <p className="lg-forgot" onClick={()=>{
                            navigate('/signup')
                        }}>Not a member? Signup</p>
                    </div>
                    <div>
                        <button type='submit' className='lg-submit' onClick={()=> {
                            axios.post('http://127.0.0.1:5000/login',{
                                Email : Email,
                                Pass : Pass
                            },{
                                withCredentials: true
                            }).then(function(result){
                                navigate('/')
                            }).catch(function(error){
                                Swal.fire({icon: "warning", title: "Error", text: error.response.data})
                            })
                        }}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;