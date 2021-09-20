import React from 'react';
import styled from "styled-components";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import TimelinePost from "../Timeline/TimelinePost";
import Trending from '../Trending/Trending.js';

export default function SelectedHashtag(){
    
    const  nomeHashtag  = useParams();
    const [posts, setPosts] = useState([]);
    const [texto, setTexto] = useState("Loading...");
    const user = JSON.parse(sessionStorage.getItem("user"));

    useEffect(()=> {
        const config = {
             headers: { "Authorization": `Bearer ${user.token}` } 
        };

        const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/hashtags/${nomeHashtag.hashtag}/posts`, config);

        requisicao
            .then(res => {setPosts(res.data.posts)
                            loading()})
            .catch(err => {alert("Houve uma falha ao carregar os posts, por favor atualize a pagina")});
    }, [nomeHashtag.hashtag, user.token]);

    function loading(){
        setTexto("Nenhum post encontrado");
    }
    return(
        <ContainerHashtag>
            <Esquerda>
                <Titulo>#{nomeHashtag.hashtag}</Titulo>
                <ContainerPosts>
                    
                    {posts.length === 0 ?
                        (
                            <h1>{texto}</h1>
                        )
                        :
                        (
                            posts.map((post, index) => <TimelinePost key = {index} post={post}/>)
                        )
                    }
                </ContainerPosts>
            </Esquerda>
            <Direita>
                <Trending />
            </Direita>
        </ContainerHashtag>
    );
}

const ContainerHashtag = styled.div `

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
    margin: 125px 0 41px 0;

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
    height: 406px;
    margin: 248px 0 0 25px;
    background-color: #171717;
    border: 1px solid #171717;
    border-radius: 16px;
`;