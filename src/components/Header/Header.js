import React from 'react';
import { Arrow, Nav, Top, User } from "./HeaderStyle"

export default function Header() {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    
    const { user } = userData
    return (
        <Nav>
            <Top>
                <h1>Linkr</h1>
                <User>
                    <Arrow />
                    <img src={user.avatar} alt="" />
                </User>
            </Top>
        </Nav>
    )
}