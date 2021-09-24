import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import ContainerForms from "../../../themes/ContainerForms";

export default function SignUpForm() {
    const [userData, setUserData] = useState({
        email: '',
        username: '',
        password: '',
        pictureUrl: ''
    });

    const [buttonToggle, setButtonToggle] = useState(<button type='submit'>Sign Up</button>);

    let history = useHistory();

    function goLogin (response) {
        console.log(response.data);

        history.push('/');
    }

    const [errorAlert, setErrorAlert] = useState('')

    function errorSignUp (error) {
        const errorStatus = error.response.status;
        if(errorStatus === 400) {
            setErrorAlert(<span>invalid picture URL</span>);
        };

        if(errorStatus === 403) {
            setErrorAlert(<span>this email is already registered</span>);
        };

        if(errorStatus === 500) {
            setErrorAlert(<span>An error occurred, please try again later</span>);
        };
        
        setButtonToggle(<button type='submit'>Sign Up</button>);
    } 

    function registerNewUser(event) {
        event.preventDefault();
        setButtonToggle(<div>Sign Up</div>);

        const userDataValues = [userData.email, userData.password, userData.username, userData.pictureUrl];



        for(let i=0; i < userDataValues.length; i++) {
            if (userDataValues[i] === '') {

                setErrorAlert(<span>Please complete all required fields</span>);

                setButtonToggle(<button type='submit'>Sign Up</button>);
                return;
            }
        }
        
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/sign-up", userData);

        promise.then(goLogin);
        promise.catch(errorSignUp);

        
    }

    return (
        <ContainerForms>
            {errorAlert}
            <form onSubmit={registerNewUser}>
                <input placeholder="e-mail" type="email" onChange={e => setUserData({...userData, email: e.target.value})} />
                <input placeholder="password" type="password" onChange={e => setUserData({...userData, password: e.target.value})} />
                <input placeholder="username" type="text" onChange={e => setUserData({...userData, username: e.target.value})} />
                <input placeholder="picture url" type="url" onChange={e => setUserData({...userData, pictureUrl: e.target.value})} />
                {buttonToggle}
            </form>
            <Link to="/">
                <p>Switch back to log in</p>
            </Link>
        </ContainerForms>
    )
}