import LoginBackground from "./LoginBackground"
import LoginForm from "./forms/LoginForm"

import FlexContainer from "../../themes/FlexContainer"

export default function Login({ setUser, setToken }) {
    return (
        <FlexContainer>
            <LoginBackground />
            <LoginForm setUser={setUser} setToken={setToken} />
        </FlexContainer>
    )
}