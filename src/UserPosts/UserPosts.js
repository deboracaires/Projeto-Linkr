// import { Page, Title, Posts } from "../../themes/PostsStyle";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header/Header";

import Post from "../components/MyPosts/Post";
import Trending from "../components/Trending/Trending";
import { getUserPosts } from "../service/linkr";
import { Page, Posts, Title } from "../themes/PostsStyle";

export default function UserPosts() {

    const params = useParams();
    
    const id = params.idUser;

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem("user"));
    
        const { token } = userData;

        getUserPosts(id, token).then((res) => setPosts(res.data.posts)).catch((err) => console.error);
    }, []);
    return (
        <div>
            <Header />
            {posts[0].user.username ?
                <Title>{posts[0].user.username}</Title>
                : <Title>fulano</Title>
            }
            <Page>
                {(posts !== []) ?
                    (<Posts>
                        {posts.map((post, index) => <Post key={index} post={post} />)}
                    </Posts>)

                    : (<h4>{posts[0].user.username} ainda não fez nenhuma  publicação</h4>)
                }
                <Trending />
            </Page>
        </div>
    );
}