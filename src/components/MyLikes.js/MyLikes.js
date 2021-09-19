import Header from "../Header/Header";

import Trending from "../Trending/Trending";
import { Page, Title, Posts } from "../../themes/PostsStyle";
import { useEffect, useState } from "react";

import { getUserLiked } from "../../service/linkr";
import Post from "../MyPosts/Post";

export default function MyLikes() {

    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem("user"));
    
        const { token } = userData;

        getUserLiked(token).then((res) => setPosts(res.data.posts)).catch((err) => console.error);
    }, []);

    return (
        <div>
            <Header />
    
            <Title>my likes</Title>
            <Page>
                {(posts !== []) ?
                    (<Posts>
                        {posts.map((post, index) => <Post key={index} post={post} />)}
                    </Posts>)

                    : (<h4>Você ainda não fez nenhuma  publicação</h4>)
                }
                <Trending />
            </Page>
        </div>
    );
}