import Header from "../Header/Header";
import Post from "./Post"
import Trending from "../Trending/Trending";
import { Page, Title, Posts } from "../../themes/PostsStyle";
import { useEffect, useState } from "react";

import { getUserPosts } from "../../service/linkr";
import styled from "styled-components";

export default function MyPosts() {

    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem("user"));
    
        const { token, user } = userData;

        getUserPosts(user.id, token).then((res) => setPosts(res.data.posts)).catch((err) => console.error);
    }, []);

    return (
        <>
            <Header />
            <ContainerMyPosts>
                
                <Esquerda>
                    <Title>my posts</Title>
                
                    {(posts !== []) ?
                        (<ContainerPosts>
                            {posts.map((post, index) => <Post key={index} post={post} />)}
                        </ContainerPosts>)

                        : (<h4>Você ainda não fez nenhuma  publicação</h4>)
                    }
                    <Trending />
                </Esquerda>
                <Trending />
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
const MenuHashtag = styled.div `
    width: 301px;
    height: 406px;
    margin: 232px 0 0 25px;
    background-color: #171717;
    border: 1px solid #171717;
    border-radius: 16px;
`;