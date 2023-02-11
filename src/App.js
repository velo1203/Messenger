import Nav from "./components/Nav";
import Message from "./components/Message";
import Login from './components/Login';
import Signup from './components/Signup'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import './Main.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";

function App() {
    let navigate = useNavigate()

    return (
        <div className="App">

            <Nav/>

            <Routes>
                <Route path="/" element={<Message/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>

        </div>
    );
}

export default App;
