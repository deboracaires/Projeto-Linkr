// import { Page, Title, Posts } from "../../themes/PostsStyle";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../Header/Header";

import Post from "../MyPosts/Post";
import Trending from "../Trending/Trending";
import { LoginValidation } from "../../login";
import { getUserPosts, getFollowing, postFollow, postUnfollow, getUserInfo } from "../../service/linkr";
import { ContainerPosts, Page, Title } from "../../themes/PostsStyle";
import Modal from "../ModalAlert/Modal";

export default function UserPosts() {
    const user = LoginValidation()
    const { token } = user;
    const params = useParams();
    
    const id = params.idUser;
    const [userInfo, setUserInfo] = useState(null)

    const [posts, setPosts] = useState([]);
    const [following, setFollowing] = useState(false)
    const [follow, setFollow] = useState([])
    const [modal, setModal] = useState(false)
    const [click, setClick] = useState(false)

    useEffect(() => {
        setFollowing(false)
        setModal(false)
        setClick(false)
        setFollow([])
        setUserInfo(null)
        setPosts([])
        getUserInfo(id, token).then((res) => setUserInfo(res.data)).catch((err) => console.error);
        getUserPosts(id, token).then((res) => setPosts(res.data.posts)).catch((err) => console.error);
        getFollowing(token).then((res) => setFollow(res.data.users)).catch((err) => console.error);

        if(userInfo && follow !== [] && follow.find((userData) => userData.id === userInfo.user.id)) {
            setFollowing(true)
        }
    }, []);


    function changeState(change) {
        if (change === true) {
            setFollowing(true);
            setModal(false);
            setClick(false);
        } else {
            setFollowing(false);
            setModal(false);
            setClick(false);
        }
    }

    function followUser() {
        setClick(true)
        if(!following) {
            postFollow(id, token).then(changeState(true)).catch(() => setModal(true));
        } else {
            postUnfollow(id, token).then(changeState(false)).catch(() => setModal(true));
        }
    }

    function cancelar() {
        setModal(false)
    }

    return (
        <div>
            <Header />
            <User>
                {userInfo ?
                    <Title>{userInfo.user.username}'s posts </Title> 
                    : <Title>fulano <span>Home</span></Title>
                }
                {userInfo && userInfo.user.username !== user.user.username ?
                        (<Button type={following} disabled={click} onClick={() => followUser()}>
                        {following ? "Unfollow" : "Follow"}</Button>)
                        : ""
                }
                
            </User>
            
            <Page>
                {(posts !== []) ?
                    (<ContainerPosts>
                        {posts.map((post, index) => <Post key={index} post={post} />)}
                    </ContainerPosts>)

                    : (<h4>{posts[0].user.username} ainda não fez nenhuma  publicação</h4>)
                }
                <Trending />
            </Page>
            {modal ? 
                <Modal cancelar={cancelar} followUser={followUser} />
                : ""
            }
        </div>
    );
}

const User = styled.div`
    width: 70vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 100px auto 30px;
`

const Button = styled.button`
    width: ${(props) => !props.type ? "7vw" : "9vw"};
    height: 35px;

    color: ${(props) => !props.type ? "#ffffff" : "#1877f2"};
    font-weight: bold;
    font-size: 18px;

    cursor: pointer;

    background: ${(props) => !props.type ? "#1877f2" : "#ffffff"};
    border-radius: 5px;
`