import styled from "styled-components";

export default function Modal ({setIsOpen, deletarPost}) {
    
    function cancelar (){
        setIsOpen(false);
    }

    function excluir (){
        deletarPost();
    }
    
    return (
        <ModalContainer>
            <h1>Tem certeza que deseja excluir essa publicação?</h1>
            <div>
                <button className="cancelar" onClick={cancelar}>Não, voltar</button>
                <button className="excluir" onClick={excluir}>Sim, excluir</button>
            </div>
        </ModalContainer>
    );
}

const ModalContainer = styled.div `
    position: fixed;
    z-index: 50;
    top: 50%;
    bottom: auto;
    left: 18.5%;
    right: auto;
    width: 597px;
    height: 262px;
    background: #333333;
    border-radius: 50px;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 38px;

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
        margin: 40px 27px 0 0 ; 
    }

    .cancelar {
        color: #1877F2;
    }
    
    .excluir {
        background-color: #1877F2;
        color: #fff;
    }
`;