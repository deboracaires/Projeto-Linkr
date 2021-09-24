import { useState } from "react";
import { Link } from "react-router-dom";
import { Arrow, MenuBar, Nav, Top, User } from "./HeaderStyle"
import styled from "styled-components";

export default function Header() {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    const { user } = userData
    const [navbar, setNavbar] = useState("false");

    function navbarCard() {
        if (navbar === "false") {
            setNavbar("true")
        }
    }

    return (
        <Nav>
            <Top>
                <Link to="/timeline">Linkr</Link>
                <User>
                    <Arrow navbar={navbar} onClick={navbarCard}/>
                    <img src={user.avatar} alt="" />
                </User>
            </Top>
            {navbar === "true" ?
                <Modal setNavbar={setNavbar} />
                : ""
            }
            
        </Nav>
    )
}

function Modal({setNavbar}) {

    function closeNavbar() {
        setNavbar("false")
    }

    function logout() {
        sessionStorage.clear()
        window.location.reload()
    }

    return (
        <ModalBack onClick={closeNavbar}>
            -
            <MenuBar>
                <Link to="/my-posts">My posts</Link>
                <Link to="/my-likes">My likes</Link>
                <Link to="/" onClick={logout}>Logout</Link>
            </MenuBar>
        </ModalBack>
    )
}

const ModalBack = styled.div `
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: 1;
    box-sizing: border-box;
    z-index: 1000;
`;