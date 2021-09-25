// import { Page, Title, Posts } from "../../themes/PostsStyle";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header/Header";

import TimelinePost from "../components/Timeline/TimelinePost";
import Trending from "../components/Trending/Trending";
import { LoginValidation } from "../login";
import { getUserPosts } from "../service/linkr";
import { ContainerPosts, Page, Title } from "../themes/PostsStyle";

export default function UserPosts() {
    const user = LoginValidation()
    const { token } = user;
    const params = useParams();
    
    const id = params.idUser;

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUserPosts(id, token).then((res) => setPosts(res.data.posts)).catch((err) => console.error);
    }, [id, token]);
    return (
        <div>
            <Header />
            {posts[0] ?
                <Title>{posts[0].user.username}</Title>
                : <Title>fulano</Title>
            }
            <Page>
                {(posts !== []) ?
                    (<ContainerPosts>
                        {posts.map((post, index) => <TimelinePost key={index} post={post} />)}
                    </ContainerPosts>)

                    : (<h4>{posts[0].user.username} ainda não fez nenhuma  publicação</h4>)
                }
                <Trending />
            </Page>
        </div>
    );
}