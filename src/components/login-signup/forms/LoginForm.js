import { Link } from "react-router-dom"

import ContainerForms from "../../../themes/ContainerForms"

export default function LoginForm() {
    return (
        <ContainerForms>
            <form>
                <input placeholder="e-mail" type="email"></input>
                <input placeholder="password" type="password"></input>
                <button>Log In</button>
            </form>
            <Link to="/sign-up">
                <span>First time? Create an account!</span>
            </Link>
        </ContainerForms>
    )
}