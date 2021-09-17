import LoginBackground from "./LoginBackground"
import LoginForm from "./forms/LoginForm"

import FlexContainer from "../../themes/FlexContainer"

export default function Login() {
    return (
        <FlexContainer>
            <LoginBackground />
            <LoginForm />
        </FlexContainer>
    )
}