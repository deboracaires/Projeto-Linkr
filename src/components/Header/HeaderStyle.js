import styled from "styled-components"
import { FaChevronDown } from "react-icons/fa"

const Nav = styled.header`
    width: 100vw;
    height: 72px;

    background-color: #151515;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
`

const Top = styled.div`
    width: 90vw;
    height: 72px;

    color: #ffffff;
    font-size: 36px;
    font-family: 'Passion One', cursive;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
`

const Arrow = styled(FaChevronDown)`
    width: 16px;
    height: 16px;
    color: #ffffff;

    margin: 0 10px;
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
    }
`

export {
    Nav,
    Top,
    Arrow,
    User
}