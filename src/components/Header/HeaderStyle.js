import styled from "styled-components"
import { FaChevronDown } from "react-icons/fa"

const Nav = styled.header`
    width: 100vw;
    height: 72px;
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    position: relative;
    left: 0;
    top: 0;
    z-index: 1000000;
`

const Top = styled.div`
    width: 100vw;
    height: 72px;

    background-color: #151515;
    
    color: #ffffff;
    font-size: 36px;
    font-family: 'Passion One', cursive;

    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    margin: 0 auto;

    box-sizing: border-box;

    a {
        text-decoration: none;
        color: #ffffff;

        font-size: 60px;
    }
`

const Arrow = styled(FaChevronDown)`
    width: 16px;
    height: 16px;
    color: #ffffff;

    transform: ${(props) => props.navbar === "true" ? "rotate(180deg)" : ""};

    cursor: pointer;

    margin: 0 15px;
`

const User = styled.div`
    height: 72px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
        width: 53px;
        height: 53px;

        border-radius: 50%;
        cursor: pointer;
    }
`
const MenuBar = styled.div`
    width: 180px;
    height: 156px;

    border-radius: 0 0 0 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    background-color: #171717;

    position: fixed;
    top: 72px;
    right: 0;

    a {
        width: 180px;

        color: #ffffff;
        font-size: 17px;
        font-weight: bold;
        font-family: 'Lato', sans-serif;
        text-align: center;
        line-height: 50px;
        text-decoration: none;
    }

    a:hover {
        background-color: #1877F2;
        border-radius: 0 0 0 20px;
    }
`

export {
    Nav,
    Top,
    Arrow,
    User,
    MenuBar
}