import { Link } from "react-router-dom";

import ContainerForms from "../../../themes/ContainerForms";

export default function SignUpForm() {
    return (
        <ContainerForms>
            <form>
                <input placeholder="e-mail" type="email"></input>
                <input placeholder="password" type="password"></input>
                <input placeholder="username" type="text"></input>
                <input placeholder="picture url" type="url"></input>
                <button>Sign Up</button>
            </form>
            <Link to="/">
                <span>Switch back to log in</span>
            </Link>
        </ContainerForms>
    )
}