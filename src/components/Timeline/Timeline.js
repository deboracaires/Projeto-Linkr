import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TimelinePost from "./TimelinePost";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { useHistory } from "react-router";



export default function Timeline(){
    
    const [posts, setPosts] = useState([]);
    const [texto, setTexto] = useState("Loading...");
    const {user} = useContext(UserContext);

    const history = useHistory();

    useEffect(()=> {
        getPosts();
    });

    const config = { headers: { "Authorization": `Bearer ${user.token}` } };

    function getPosts(){
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts", config);

        requisicao
            .then(res => {setPosts(res.data)
                            loading()})
            .catch(err => {alert("Houve uma falha ao carregar os posts, por favor atualize a pagina")
                            history.push("/")});
    }

    function loading(){
        setTexto("Nenhum post encontrado");
    }

   
    
    
    return (
        <ContainerTimeline>

            <ContainerPosts>
                
                {posts.length === 0 ?
                    (
                        <h1>{texto}</h1>
                    )
                    :
                    (
                        posts.posts.map((post, index) => <TimelinePost key = {index} post={post}/>)
                    )
                }
            </ContainerPosts>
        </ContainerTimeline>
        
    );
}

const ContainerTimeline = styled.div `
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: #333333;
    
    display: flex;
    justify-content: center;
`;

const ContainerPosts = styled.div `
    display: flex;
    flex-direction: column;
    
`;