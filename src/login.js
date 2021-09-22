import { useHistory } from "react-router";

function LoginValidation() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    const history = useHistory();
    if (user === null) {
        history.push("/")
        
        user = {token: ""}
        window.location.reload()
    } else {
        return user;
    }
}

export {
    LoginValidation
}