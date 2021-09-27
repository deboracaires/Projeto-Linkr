import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ReactTooltip from "react-tooltip";
import ReactPlayer from "react-player";

import { getLikes, postDislike, postLike } from "../../service/linkr";
import { Like, EsquerdaPost, ContainerPost, DireitaPost, ContainerLink, Liked } from "../../themes/PostsStyle";
import ReactHashtag from "react-hashtag";
import { LoginValidation } from "../../login";
import styled from "styled-components";
import { AiOutlineComment } from "react-icons/ai";
/*eslint-disable*/
export default function Post({post}) {
    const userData = LoginValidation()
    const { user, token } = userData;
    
    const history = useHistory()
    
    let { likes } = post

    const [list, setList] = useState("")
    let [like, setLike] = useState(0)
    const [quantLikes, setQuantLike] = useState(0)
    const [likesInPost, setLikesInPost] = useState(likes)
    let [name, setName] = useState("")
    let nameList = "Outro nome"

    let text = "likes";
    let validationURL = post.link.match(/(http(s)?:\/\/.)?(www\.)?(youtube\.)?(com\/watch)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
    useEffect(() => {
        setList(text)

        setQuantLike(likes.length)

        if(post && likesInPost !== [] && (likesInPost.find((us) => us.userId === user.id))) {
            setLike(1)
        }

        setLike((likes.find((us) => us.userId == user.id)) ?
        like = 1 : like = 0)

        if (like === 1 && likesInPost.length > 0 && likesInPost.find((us) => us.userId === user.id) ) {
            let text = likesInPost.filter((nameUser) => nameUser.userId !== user.id)
            nameList = text.map((name) => getNames(name.userId))
            // nomeList = getNames(text[0].userId, ((text.length >= 2) ? text[1].userId : text[0].userId))
            console.log(nameList)
            if (likesInPost.length > 3) {
                setList(`Você, ${nameList[0]}, ${nameList[1]} e mais ${likesInPost.length - 3} pessoas curtiram`)
            } else if (likesInPost.length == 3) {
                setList(`Você, ${nameList[0]}, ${nameList[1]} curtiram`)
            } else if (likesInPost.length == 2) {
                setList(`Você e ${nameList[0]} curtiram`)
            } else if (likesInPost.length == 1) {
                setList(`Você curtiu esse post`)
            }
        } else if (like === 0 && likesInPost.length > 0) {  
            nameList = likesInPost.map((name) => getNames(name.userId))          
            if (likesInPost.length > 2) {
                setList(`${nameList[0]}, ${nameList[1]} e mais ${likesInPost.length - 2} pessoas curtiram`)
            } else if (likesInPost.length == 2) {
                setList(`${nameList[0]} e ${nameList[1]} curtiram`)
            } else if (likesInPost.length == 1) {
                setList(`${nameList[0]} curtiu esse post`)
            } 
        } else {
            setList("Nenhuma curtida")
        }

    }, [like, list, name])

    function getNames(idUser) {
        
        getLikes(idUser, token).then((res) => setName(res.data.user.username));
        
        let names = name;
        return names;
    }

    function likePost() {
        if(like === 0) {
            setLike(1)
            setQuantLike(quantLikes + 1)
            postLike(post.id, token).then((res) => setLikesInPost(res.data)).catch((err) => console.error)
        }
    }

    function dislikePost() {
        if(like === 1) {
            setLike(0);
            postDislike(post.id, token).then((res) => setLikesInPost(res.data)).catch((err) => console.error);
            setQuantLike(quantLikes - 1)
        }
    }
    
    function redirecionar(){
        history.push(`/user/${post.user.id}`)
    }

    function directToHashtag(val){
        const hash = val.replace(/#/, "");
        history.push(`/hashtag/${hash}`)
    }

    
    return (
        <ContainerPost video={validationURL}>
            {((user)) ?
                <>
                    <EsquerdaPost>
                        <img src={post.user.avatar} alt="" />
                        <div>
                            {(like === 1) ?
                                <Liked onClick={() => dislikePost()} />
                                : <Like onClick={() => likePost()} />
                            }
                        </div>
                        <ReactTooltip />
                        <h3 data-tip={list}>{quantLikes} {text}</h3>

                        <div>
                            <AiOutlineComment size='20px' color="#ffffff"/>
                        </div>
                        <h3>{post.commentCount} comments</h3>
                        <div onClick={() => setModalRepublish(true)}>
                            <AiOutlineRet weet size='20px' color="#ffffff"/>
                        </div>
                        <h3>{post.repostCount} re-posts</h3>
                    </EsquerdaPost>
                    <DireitaPost>
                        <h4 onClick={redirecionar}>{post.user.username}</h4>
                        <h5>
                            <ReactHashtag onHashtagClick={val => directToHashtag(val)}>
                                {post.text}
                            </ReactHashtag>
                        </h5>
                        {
                            (validationURL === null) ?
                                <ContainerLink onClick={() => window.open(`${post.link}`,"_blank")}>
                                    <h4>{post.linkTitle}</h4>
                                    <h5>{post.linkDescription}</h5>
                                    <h6 href={post.link}>{post.link}</h6>
                                    <img src={post.linkImage} alt="" />
                                </ContainerLink>
                                
                                : 
                                <ContainerVideo>
                                    <ReactPlayer url={validationURL} controls={true} width="32vw" height="18vw" />
                                    <h6>{post.link}</h6>
                                </ContainerVideo>
                        }
                        
                    </DireitaPost>
                    
                </>
                : ""
            }
            
        </ContainerPost>
    );
}

const ContainerVideo = styled.div `
    width: 36vw;
    height: 350px;
    /* border: 1px solid #4d4d4d; */
    border-radius: 11px;
    position: relative;
    padding-left: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    background-color: #171717;
    z-index: 0;
    /* margin-right: 13px; */

    :hover{
        cursor : pointer;
    }


    img{
        width: 153.44px;
        height: 155px;
        border-radius: 0px 12px 13px 0px;
        position: absolute;
        right: 0;
        top: 0;
    }

    h4 {
        font-size: 16px;
        font-weight: 400;
        color: #cecece;
        width: 25vw;
        height: 40px;
        line-height: 19px;
        border: 1px solid #171717;
        word-wrap: break-word;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }

    h5 {
        width: 24vw;
        height: 39px;
        font-size: 11px;
        color: #9b9595;
        line-height: 13px;
        border: 1px solid #171717;
        word-wrap: break-word;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    h6 {
        color: #cecece;
        font-size: 16px;
        font-weight: 400;
        width: 32vw;
        line-height: 20px;
        border: 1px solid #171717;
        word-wrap: break-word;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
`;