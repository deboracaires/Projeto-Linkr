import React from 'react';
import Header from "../Header/Header";
import Post from "./Post"
import Trending from "../Trending/Trending";
import { ContainerPosts, Title } from "../../themes/PostsStyle";
import { useEffect, useState } from "react";

import { getUserPosts } from "../../service/linkr";
import styled from "styled-components";
import { LoginValidation } from "../../login";

export default function MyPosts() {

    const [posts, setPosts] = useState([]);
    const user = LoginValidation();
    const { token } = user;

    useEffect(() => {
        getUserPosts(user.id, token).then((res) => setPosts(res.data.posts)).catch((err) => console.error);
    }, [user, token]);

    return (
        <>
            <Header />
            <ContainerMyPosts>
                
                <Esquerda>
                    <Title>my posts</Title>
                
                    {(posts !== []) ?
                        (<ContainerPosts>
                            {posts.map((post, index) => <Post key={index} post={post} token={token} />)}
                        </ContainerPosts>)

                        : (<h4>Você ainda não fez nenhuma  publicação</h4>)
                    }
                    <Trending />
                </Esquerda>
            </ContainerMyPosts>
        </> 
    );
}

const ContainerMyPosts = styled.div `
    box-sizing: border-box;
    width: 100vw;
    
    display: flex;
    justify-content: center;    
`;

const Esquerda = styled.div `
    display: flex;
    flex-direction: column; 
`;
