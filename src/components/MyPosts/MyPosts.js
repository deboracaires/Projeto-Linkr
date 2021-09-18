import Header from "../Header/Header";
import Post from "./Post"
import Trending from "../Trending/Trending";
import { Page, Title, Posts } from "../../themes/PostsStyle";
import { useEffect, useState } from "react";

import { getUserPosts } from "../../service/linkr";

export default function MyPosts() {

    const userData = JSON.parse(sessionStorage.getItem("user"));
    
    const { token, user } = userData;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUserPosts(user.id, token).then((res) => setPosts(res.data.posts)).catch((err) => console.error);
    }, []);

    return (
        <div>
            <Header />
    
            <Title>my posts</Title>
            <Page>
                {(posts !== []) ?
                    (<Posts>
                        {posts.map((post, index) => (console.log(post), <Post key={index} post={post} />))}
                    </Posts>)

                    : (<h4>Você ainda não fez nenhuma  publicação</h4>)
                }
                <Trending />
            </Page>
        </div>
    );
}