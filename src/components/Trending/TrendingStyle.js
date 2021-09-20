import styled from "styled-components";

const Trends = styled.div`
    width: 20vw;
    height: 450px;

    color: #ffffff;

    border-radius: 16px;

    background-color: #171717;

    margin: 30px 0 30px auto;

    /* position: fixed;
    top: 130px;
    right: 0; */

    h3 {
        width: 88%;

        text-align: start;
        margin: 0 auto;

        font-family: 'Oswald', sans-serif;
        font-size: 24px;
        line-height: 55px;
    }

    h4 {
        width: 88%;

        text-align: start;
        margin: 0 auto;
        font-family: 'Lato', sans-serif;
        font-size: 19px;
        margin: 20px 0 0 20px;
    }

    strong {
        font-weight: bold;
    }
`

const Line = styled.div`
    width: 100%;
    height: 1px;

    background-color: #484848;

    margin: 20px 0;
`

export {
    Trends,
    Line
}