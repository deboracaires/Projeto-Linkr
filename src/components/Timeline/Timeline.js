import React, { useContext } from "react";
import styled from "styled-components";
import TimelinePost from "./TimelinePost";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

const posts = {

        
            "id": 2,
            "text": "Never Gonna Give You Up #rickroll",
            "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "linkTitle": "Rick Astley - Never Gonna Give You Up (Video)",
            "linkDescription": "Rick Astley's official music video for “Never Gonna Give You Up” Listen to Rick Astley: https://RickAstley.lnk.to/_listenYDSubscribe to the official Rick Ast...",
            "linkImage": "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            "user": {
                "id": 1,
                "username": "teste",
                "avatar": "https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/1/avatar"
            },
            "likes": [
                {
                    "id": 1,
                    "userId": 1,
                    "postId": 2,
                    "createdAt": "2021-05-24T18:55:37.544Z",
                    "updatedAt": "2021-05-24T18:55:37.544Z",
                    "user.id": 1,
                    "user.username": "teste"
                }
            ]
        
    
};

export default function Timeline(){
    
    const {user} = useContext(UserContext);
    
    console.log(user.token)
    const config = { headers: { Authorization: `Bearer ${user.token}` } };

    const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts", config);

    requisicao
        .then(res => console.log(res.data));
    
    return (
        <ContainerTimeline>
            <TimelinePost posts = {posts}/>
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