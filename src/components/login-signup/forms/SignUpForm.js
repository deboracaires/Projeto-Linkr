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

    function errorSignUp () {
        alert('this email is already registered');

        setButtonToggle(<button type='submit'>Sign Up</button>);
    } 

    function registerNewUser(event) {
        event.preventDefault();
        setButtonToggle(<div>Sign Up</div>);

        const userDataValues = [userData.email, userData.password, userData.username, userData.pictureUrl];



        for(let i=0; i < userDataValues.length; i++) {
            if (userDataValues[i] === '') {

                alert('Please complete all required fields');
                setButtonToggle(<button type='submit'>Sign Up</button>);
                return;
            }
        }
        
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-up", userData);

        promise.then(goLogin);
        promise.catch(errorSignUp);

        
    }

    return (
        <ContainerForms>
            <form onSubmit={registerNewUser}>
                <input placeholder="e-mail" type="email" onChange={e => setUserData({...userData, email: e.target.value})} />
                <input placeholder="password" type="password" onChange={e => setUserData({...userData, password: e.target.value})} />
                <input placeholder="username" type="text" onChange={e => setUserData({...userData, username: e.target.value})} />
                <input placeholder="picture url" type="url" onChange={e => setUserData({...userData, pictureUrl: e.target.value})} />
                {buttonToggle}
            </form>
            <Link to="/">
                <span>Switch back to log in</span>
            </Link>
        </ContainerForms>
    )
}