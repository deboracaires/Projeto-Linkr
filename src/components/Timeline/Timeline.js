import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TimelinePost from "./TimelinePost";
import axios from "axios";
import useInterval from "react-useinterval";
import InfiniteScroll from "react-infinite-scroll-component";


import Publish from "../Publish/Publish"
import { LoginValidation } from "../../login";
import Header from "../Header/Header";
import Trending from "../Trending/Trending";

export default function Timeline(){
    
    const [posts, setPosts] = useState([]);
    const [qtdFollow, setQtdFollow] = useState(0);
    const [texto, setTexto] = useState("Loading...");
    
    const user = LoginValidation()
    const { token } = user;

    /*eslint-disable*/
    useEffect( () => {
        renderPosts();
    }, []);

    let url = "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/following/posts";
    
    function renderPosts(){

        const config = { headers: { "Authorization": `Bearer ${token}` } };
        
        const requisicao = axios.get(url, config);
    
        requisicao
            .then(res => {setPosts(res.data.posts)
                                verificaSeguir()})
            .catch(err => {alert("Houve uma falha ao carregar os posts, por favor atualize a pagina")});

        
        
    }
    
    function verificaSeguir(){
        const config = { headers: { "Authorization": `Bearer ${token}` } };
    
            const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/users/follows", config);
    
            requisicao
                .then(res => {setQtdFollow(res.data.users.length)
                                {res.data.users.length === 0 ? setTexto("Você não segue ninguém ainda, procure por perfis na busca."): ""}
                            })
                .catch();
        
    }
   
    function loadOlderPosts(){
        url = url + `?olderThan${posts[posts.length - 1].id}`;
        const config = { headers: { "Authorization": `Bearer ${token}` } };
        
        const requisicao = axios.get(url, config);
    
        requisicao
            .then(res => {  setPosts(res.data.posts)
                                verificaSeguir()})
            .catch(err => {console.log(err)});
        
    }

    

    useInterval(renderPosts, 15000, 5);
    

    function verificaPost(){
        
        if(posts.posts.length === 0){
            setTexto('Nenhuma publicação encontrada');
        }else{
            return posts.posts.map((post, index) => <TimelinePost key = {index} post={post} setLinkPreviewToggle = {setLinkPreviewToggle}/>);
        }
    }

    const [linkPreviewToggle, setLinkPreviewToggle] = useState('')

    return (
        <>
        <Topo>
            <Header/>
        </Topo>
        
        <ContainerTimeline>
            
            <Esquerda>
                <Titulo>timeline</Titulo>
                <NewPost>
                    <Publish />
                </NewPost>
                <ContainerPosts>
                    
                    {
                        qtdFollow === 0?
                        (
                            <h2>{texto}</h2>
                        )
                        :
                        (   
                            <InfiniteScroll 
                                dataLength={10}
                                next={loadOlderPosts}
                                hasMore={true }
                                loader={<h1 key={3201}> Loading... </h1>}
                                endMessage={<h1 key={320211}> Loading... </h1>}
                            >
                                {posts.map((post, index) => <TimelinePost key = {index} post={post} setLinkPreviewToggle = {setLinkPreviewToggle}/>)}
                            </InfiniteScroll>
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

const Topo = styled.div `
    position: fixed;
    z-index: 100;
`;

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
    width: 42vw;
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
        width: 42vw;
    }
    
`;
const Direita = styled.div `
    
    margin: 205px 0 0 25px;

    
`;