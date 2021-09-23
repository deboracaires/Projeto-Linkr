import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function ModalExcluir ({setIsOpen, post}) {
    
    const [textoExcluir, setTextoExcluir] = useState("Sim, excluir");
    const [textoCancelar, setTextoCancelar] = useState("Não, voltar");
    const user = JSON.parse(sessionStorage.getItem("user"));

    function cancelar (){
        setIsOpen(false);
    }

    function excluir (){
        
        setTextoExcluir(<Loader type="ThreeDots" color="#fff" height={45} width={45} />);
        setTextoCancelar(<Loader type="ThreeDots" color="#1877f2" height={45} width={45} />);

        const config = { headers: { "Authorization": `Bearer ${user.token}` } };

        const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts/${post.id}`, config);

        requisicao
            .then(res => {
                        window.location.reload()})
            .catch(err => { setIsOpen(false)
                            alert("Houve uma falha ao excluir o post, por favor atualize a pagina")
                           });
        
        
    }
    
    return (
        <div>
            <ModalBack></ModalBack>
            <ModalContainer>
                <h1>Tem certeza que deseja excluir essa publicação?</h1>
                <div>
                    <button className="cancelar" onClick={cancelar}>{textoCancelar}</button>
                    <button className="excluir" onClick={excluir}>{textoExcluir}</button>
                </div>
            </ModalContainer>
        </div>
    );
}

const ModalBack = styled.div `
    width: 100000px;
    height: 1000000px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: 0.7;
`;
const ModalContainer = styled.div `
    position: fixed;
    z-index: 5000;
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