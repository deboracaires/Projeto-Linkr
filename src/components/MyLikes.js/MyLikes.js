import Header from "../Header/Header";

import Trending from "../Trending/Trending";
import { Page, Title, Posts } from "../../themes/PostsStyle";
import { useEffect, useState } from "react";

import { getUserLiked } from "../../service/linkr";
import Post from "../MyPosts/Post";
import { LoginValidation } from "../../login";

export default function MyLikes() {
    const user = LoginValidation()
    const { token } = user;
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUserLiked(token).then((res) => setPosts(res.data.posts)).catch((err) => console.error);
    }, [token]);

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