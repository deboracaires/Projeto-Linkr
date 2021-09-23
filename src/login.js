import { useHistory } from "react-router";

function LoginValidation() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const history = useHistory();
    if (user === null) {
        history.push("/")
        if (user.token) {
            user.token = "";
        }
        window.location.reload()
    } else {
        return user;
    }
}

export {
    LoginValidation
}