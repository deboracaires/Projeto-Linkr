import Header from "../Header/Header";
import Post from "./Post"
import Trending from "../Trending/Trending";
import { DescriptionLink, Description, ImageLink, PostInfo, Like, Links, Page, Title, UserInfo, Posts } from "./PostsStyle";

export default function MyPosts() {


    const posts = [
        {
            "id": 2,
            "text": "Never Gonna Give You Up #rickroll",
            "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "linkTitle": "Rick Astley - Never Gonna Give You Up (Video)",
            "linkDescription": "Rick Astley's official music video for “Never Gonna Give You Up” Listen to Rick Astley: https://RickAstley.lnk.to/_listenYDSubscribe to the official Rick Ast...",
            "linkImage": "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            "user": {
                "id": 1,
                "username": "teste",
                "avatar": "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/users/1/avatar"
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
        },
        {
            "id": 2,
            "text": "Never Gonna Give You Up #rickroll",
            "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "linkTitle": "Rick Astley - Never Gonna Give You Up (Video)",
            "linkDescription": "Rick Astley's official music video for “Never Gonna Give You Up” Listen to Rick Astley: https://RickAstley.lnk.to/_listenYDSubscribe to the official Rick Ast...",
            "linkImage": "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            "user": {
                "id": 1,
                "username": "teste",
                "avatar": "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/users/1/avatar"
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
                },
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
        }
    ]  


    console.log(posts.id)

    return (
        <>
            <Header />
    
            <Title>my posts</Title>
            <Page>
                <Posts>
                    {posts.map((post) => <Post post={post} />)}
                </Posts>
                
                <Trending />
            </Page>
        </>
    );
}