import styled from "styled-components";

const Trends = styled.div`
    width: 20vw;
    height: 620px;

    color: #ffffff;

    border-radius: 16px;

    background-color: #171717;

    margin: 30px 0 30px auto;

    padding-bottom: 30px;

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
    
    h4:hover {
        cursor: pointer;
    }

    strong {
        font-weight: bold;
    }

    section {
        width: auto;
        height: 35px;

        margin: 15px 20px 0;

        display: flex;
        align-items: center;
        
        border-radius: 8px;

        background-color: #252525;

        input {
            all: unset;
            width: 100%;
            height: 100%;

            text-indent: 6px;
            
            
            border-radius: 8px;
            
            color: white;
            background-color: #252525;
            ::placeholder {
                font-size: 15px;
                font-family: Lato;
            }
        };

        span {
            margin: 6px;
        }
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