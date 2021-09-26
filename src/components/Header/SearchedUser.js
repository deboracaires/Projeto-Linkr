import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SearchedUser({username, avatar, id}) {
    return (
        <Link to={'/user/' + id}>
            <ContainerSearchedUser>
                <img src={avatar}></img>
                <h2>{username}</h2>
            </ContainerSearchedUser>
        </Link>
    )
}

const ContainerSearchedUser = styled.section `
    display: flex;
    align-items: center;

    padding: 10px;
    cursor: pointer;
    border-radius: 8px;
    :hover {
        background-color: #B7B7AD;
    }
    
   

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;

        margin-right: 15px;
    }

    h2 {
        font-weight: normal;
        font-size: 20px;
        font-family: Lato;
        color: #515151;
    }

`