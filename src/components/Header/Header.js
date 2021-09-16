import { Arrow, Nav, Top, User } from "./HeaderStyle"

export default function Header() {
    return (
        <Nav>
            <Top>
                <h1>Linkr</h1>
                <User>
                    <Arrow />
                    <img src="https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/4/avatar" />
                </User>
            </Top>
        </Nav>
    )
}