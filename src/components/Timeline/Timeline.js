import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TimelinePost from "./TimelinePost";
import axios from "axios";

import Publish from "../Publish/Publish"
import { LoginValidation } from "../../login";
import Header from "../Header/Header";
import Trending from "../Trending/Trending";

import LinkPreview from "./LinkPreview";

export default function Timeline(){
    
    const [posts, setPosts] = useState([]);
    const [texto, setTexto] = useState("Loading...");
    
    const user = LoginValidation()
    const { token } = user;

    useEffect(()=> {
        const config = { headers: { "Authorization": `Bearer ${token}` } };

        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts", config);

        requisicao
            .then(res => {setPosts(res.data)
                            loading()})
            .catch(err => {alert("Houve uma falha ao carregar os posts, por favor atualize a pagina")});

    }, [token]);

    function loading(){
        setTexto("Nenhum post encontrado");
    }

    const [linkPreviewToggle, setLinkPreviewToggle] = useState('')

    return (
        <>
        <Header/>
        <ContainerTimeline>
            
            <Esquerda>
                <Titulo>timeline</Titulo>
                <NewPost>
                    <Publish />
                </NewPost>
                <ContainerPosts>
                    
                    {posts.length === 0 ?
                        (
                            <h2>{texto}</h2>
                        )
                        :
                        (
                            posts.posts.map((post, index) => <TimelinePost key = {index} post={post} setLinkPreviewToggle = {setLinkPreviewToggle}/>)
                        )
                    }
                </ContainerPosts>
            </Esquerda>
            <Direita>
                <Trending />
            </Direita>
        </ContainerTimeline>
        {linkPreviewToggle}
        </>
    );
}

const ContainerTimeline = styled.div `
    box-sizing: border-box;
    width: 100vw;
    
    display: flex;
    justify-content: center; 
       
`;
const Esquerda = styled.div `
    display: flex;
    flex-direction: column; 
`;

const Titulo = styled.h1 `
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    font-size: 43px;
    color: #fff;
    line-height: 64px;
    margin: 125px 0 43px 0;
    
`;
const NewPost = styled.div `
    width: 611px;
    height: 250px;
    border: 1px solid #fff;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    position: relative;
`;

const ContainerPosts = styled.div `
    display: flex;
    flex-direction: column;

    h2 {
        font-family: 'Lato', sans-serif;
        font-size: 30px;
        margin-top: 80px;
        color: #fff;
    }
    
`;
const Direita = styled.div `
    
    margin: 205px 0 0 25px;
   
`;