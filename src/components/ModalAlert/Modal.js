import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Modal ({ cancelar, followUser }) {
    
    return (
        <ModalBack>
            -
            <ModalContainer>
                <h1>Unable to perform this operation</h1>
                <div>
                    <button className="cancelar" onClick={cancelar}>Cancel</button>
                    <button className="excluir" onClick={followUser}>Try again</button>
                </div>
            </ModalContainer>
        </ModalBack>
    );
}

const ModalBack = styled.div `
    width: 100000px;
    height: 1000000px;
    background-color: rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: 1;
`;
const ModalContainer = styled.div `
    position: fixed;
    z-index: 50;
    top: 50%;
    bottom: auto;
    left: 30%;
    right: auto;
    width: 597px;
    height: 262px;
    background-color: #333333;
    border-radius: 50px;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 38px;
    opacity: 1;

    h1 {
        font-weight: 700;
        font-size: 34px;
        line-height: 41px;
        width: 370px;
        height: 82px;
        color: #FFFFFF;
    }
    
    button {
        width: 134px;
        height: 37px;
        border-radius: 5px;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        margin: 40px 27px 0 0;
        
        cursor: pointer;
    }

    .cancelar {
        color: #1877F2;
    }
    
    .excluir {
        background-color: #1877F2;
        color: #fff;
    }
`;