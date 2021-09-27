import Header from "../Header/Header";

import Trending from "../Trending/Trending";
import { Title, ContainerPosts } from "../../themes/PostsStyle";
import { useEffect, useState } from "react";

import { getUserLiked } from "../../service/linkr";
import Post from "../MyPosts/Post";
import { LoginValidation } from "../../login";
import styled from "styled-components";

export default function MyLikes() {
    const user = LoginValidation()
    const { token } = user;
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUserLiked(token).then((res) => setPosts(res.data.posts)).catch((err) => console.error);
    }, [token]);

    return (
        <>
            <Header />
    
            <ContainerMyLikes>
                <Esquerda>
                    <Title>my likes</Title>
                    <ContainerPosts>
                        {(posts !== []) ?
                            posts.map((post, index) => <Post key={index} post={post} />)

                            : (<h4>Você ainda não curtiu nenhuma  publicação</h4>)
                        }
                    </ContainerPosts>
                </Esquerda>
                
                <Direita>
                    <Trending />
                </Direita>
            </ContainerMyLikes>
        </>
    );
}

const ContainerMyLikes = styled.div `
    width: 100vw;

    box-sizing: border-box;
    
    display: flex;
    justify-content: center;

    margin-bottom: 70px;
    /* margin-top: 100px; */
`;

const Esquerda = styled.div `
    display: flex;
    flex-direction: column;
`;

const Direita = styled.div `
    margin: 205px 0 0 25px;
`;