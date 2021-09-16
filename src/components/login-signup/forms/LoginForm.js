import { Link } from "react-router-dom"
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import ContainerForms from "../../../themes/ContainerForms";

import UserContext from "../../../contexts/UserContext";

export default function LoginForm() {
    const [userData, setUserData] = useState({
        email: '',
        username: ''
    });

    const {setUser} = useContext(UserContext);

    const [buttonToggle, setButtonToggle] = useState(<button type='submit'>Log In</button>);

    let history = useHistory();

    function goTimeline(response) {
        setUser(response.data);

        history.push('/timeline');
    };

    function errorLogIn () {
        alert('incorrect email/password');
        
        setButtonToggle(<button type='submit'>Log In</button>)
    };

    function signIn(event) {
        event.preventDefault();
        setButtonToggle(<div>Sign Up</div>)

        const userDataValues = [userData.email, userData.password]

        for(let i=0; i < userDataValues.length; i++) {
            if (userDataValues[i] === '') {

                alert('Please complete all required fields')
                setButtonToggle(<button type='submit'>Log In</button>)
                return
            }
        }
        
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-in", userData)

        promise.then(goTimeline)
        promise.catch(errorLogIn)
    }

    return (
        <ContainerForms>
            <form onSubmit={signIn}>
            <input placeholder="e-mail" type="email" onChange={e => setUserData({...userData, email: e.target.value})} />
                <input placeholder="password" type="password" onChange={e => setUserData({...userData, password: e.target.value})} />
                {buttonToggle}
            </form>
            <Link to="/sign-up">
                <span>First time? Create an account!</span>
            </Link>
        </ContainerForms>
    )
}