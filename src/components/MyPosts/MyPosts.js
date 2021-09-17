import Header from "../Header/Header";
import Post from "./Post"
import Trending from "../Trending/Trending";
import { Page, Title, Posts } from "../../themes/PostsStyle";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { getUserPosts } from "../../service/linkr";

export default function MyPosts() {

    const { user, token } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        getUserPosts(user.id, token).then((res) => setPosts(res.data)).catch((err) => console.error);
    }, []);

    return (
        <>
            <Header />
    
            <Title>my posts</Title>
            <Page>
                {(myPosts === []) ?
                    (<Posts>
                        {myPosts.map((post, index) => <Post key={index} post={post} />)}
                    </Posts>)

                    : (<h4>Você ainda não fez nenhuma  publicação</h4>)
                }
                <Trending />
            </Page>
        </>
    );
}