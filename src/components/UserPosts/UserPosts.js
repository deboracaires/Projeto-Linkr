/*eslint-disable*/
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
    const [following, setFollowing] = useState(0)
    const [follow, setFollow] = useState([])
    const [modal, setModal] = useState(false)
    const [click, setClick] = useState(false)

    useEffect(() => {
        setFollowing(0)
        setModal(false)
        setClick(false)
        setFollow([])
        // setPosts([])
        getUserInfo(id, token).then((res) => setUserInfo(res.data)).catch((err) => console.error);
        getUserPosts(id, token).then((res) => setPosts(res.data.posts)).catch((err) => console.error);
        getFollowing(token).then((res) => setFollow(res.data.users)).catch((err) => console.error);
        
        
        // console.log(!!(follow.find((userData) => console.log(userData))))
        if(userInfo && follow !== [] && (follow.find((userData) => userData.id == id))) {
            console.log(!!(follow.find((userData) => console.log(userData))))
            
            setFollowing(1)
            console.log(following)
        }
    }, []);
    console.log(follow)
    // (follow.find((userData) => userData.id == id))

    // changeState(true),
    function changeState(change) {
        if (change === true) {
            setFollowing(1);
            setModal(false);
            setClick(false);
        } else {
            setFollowing(0);
            setModal(false);
            setClick(false);
        }
    }

    function followUser() {
        setClick(true)
        setFollowing(0)
        postFollow(id, token).then(changeState(true)).catch(() => setModal(true));
    }

    function unfollowUser() {
        setClick(true)
        setFollowing(1)
        postUnfollow(id, token).then(changeState(false)).catch(() => setModal(true));
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
                    (follow.find((userData) => userData.id == id)) ?
                        (
                        <Button type={!following} disabled={click} onClick={() => unfollowUser()}>
                        Unfollow</Button>)
                        
                        : (
                        <Button type={following} disabled={click} onClick={() => followUser()}>
                        Follow</Button>)

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
    width: ${(props) => props.type === 0 ? "7vw" : "9vw"};
    height: 35px;

    color: ${(props) => props.type === 0 ? "#ffffff" : "#1877f2"};
    font-weight: bold;
    font-size: 18px;

    cursor: pointer;

    background: ${(props) => props.type === 0 ? "#1877f2" : "#ffffff"};
    border-radius: 5px;
`