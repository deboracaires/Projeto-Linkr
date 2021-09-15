import styled from "styled-components";

const ContainerForms = styled.div `
    width: 40vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form {
        display: flex;
        flex-direction: column;

        margin-bottom: 15px;

        * {
            width: 320px;
            height: 40px;


            border-radius: 3px;

            font-size: 18px;
        }

        input {
            margin-bottom: 10px;
            text-indent: 10px;

        }

        button {
            color: white;
            background-color: #1877F2;
        }
    }

    span {
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        color: white;

        text-decoration: underline;
    }
    
`
export default ContainerForms;
