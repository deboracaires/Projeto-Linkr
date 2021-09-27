import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import ReactTooltip from "react-tooltip";
import ReactPlayer from "react-player";

import { getLikes, postDislike, postLike } from "../../service/linkr";
import { Like, EsquerdaPost, ContainerPost, DireitaPost, ContainerLink, Liked } from "../../themes/PostsStyle";
import ReactHashtag from "react-hashtag";
import { LoginValidation } from "../../login";
import styled from "styled-components";
import { AiOutlineComment, AiOutlineRetweet } from "react-icons/ai";
import { BsFillTrashFill, BsPencil } from "react-icons/bs";
/*eslint-disable*/
export default function Post({post}) {
    const userData = LoginValidation()
    const { user, token } = userData;
    
    const history = useHistory()
    
    let { likes } = post

    const inputRef = useRef(null);
    const [isInEdit, setIsInEdit] = useState(false);

    const [list, setList] = useState("")
    let [like, setLike] = useState(0)
    const [quantLikes, setQuantLike] = useState(0)
    const [likesInPost, setLikesInPost] = useState(likes)
    let [name1, setName1] = useState("")
    let [name2, setName2] = useState("")
    let nomeList = "Outro nome"

    let text = "likes";
    let validationURL = post.link.match(/(http(s)?:\/\/.)?(www\.)?(youtube\.)?(com\/watch)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
    useEffect(() => {
        setList(text)

        if (isInEdit) {
            inputRef.current.focus();
        }

        setQuantLike(likes.length)

        if(post && likesInPost !== [] && (likesInPost.find((us) => us.userId === user.id))) {
            setLike(1)
        }

        setLike((likes.find((us) => us.userId == user.id)) ?
        like = 1 : like = 0)

        if (like === 1 && likesInPost.length > 0 && likesInPost.find((us) => us.userId === user.id) ) {
            let text = likesInPost.filter((nameUser) => nameUser.userId !== user.id)

            if (text.length > 1) {
                nomeList = getNames(text[0].userId, ((text.length > 1) ? text[1].userId : text[0].userId))
            
                if (likesInPost.length > 2) {
                    setList(`Você, ${nomeList.name1}, ${nomeList.name2} e mais ${likesInPost.length - 3} pessoas curtiram`)
                } else if (likesInPost.length == 2) {
                    setList(`Você e ${nomeList.name1} curtiram`)
                } else if (likesInPost.length == 1) {
                    setList(`Você curtiu esse post`)
                }
            }
            
        } else if (like === 0 && likesInPost.length > 0) {
            nomeList = getNames(likesInPost[0].userId, ((likesInPost.length > 1) ? likesInPost[1].userId : likesInPost[0].userId))
            
            if (likesInPost.length > 2) {
                setList(`${nomeList.name1}, ${nomeList.name2} e mais ${likesInPost.length - 2} pessoas curtiram`)
            } else if (likesInPost.length == 2) {
                setList(`${nomeList.name1} e ${nomeList.name2} curtiram`)
            } else if (likesInPost.length == 1) {
                setList(`${nomeList.name1} curtiu esse post`)
            } 
        } else {
            setList("Nenhuma curtida")
        }

    }, [like, list, name1, name2])

    function editPost() {   
        setIsInEdit(!isInEdit)
        
    };

    function getNames(idUser, idUser2) {
        
        getLikes(idUser, token).then((res) => setName1(res.data.user.username));
        getLikes(idUser2, token).then((res) => setName2(res.data.user.username));
        
        let names = {name1, name2};
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
                    <AiOutlineRetweet size='20px' color="#ffffff"/>
                </div>
                <h3>{post.repostCount} re-posts</h3>
            </EsquerdaPost>

            {(user && post.user) ?
                <>
                    <DireitaPost>
                            <h4 onClick={redirecionar}>{post.user.username ? post.user.username : "Não foi possível obter informação do usuário"}</h4>
                            : "Não foi possível obter informação do usuário"
                        
                        
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
                                    <h6>{post.link}</h6>
                                    <img src={post.linkImage} alt="" />
                                </ContainerLink>
                                
                                : 
                                <ContainerVideo>
                                    <ReactPlayer url={validationURL} controls={true} width="32vw" height="18vw" />
                                    <h6>{post.link}</h6>
                                </ContainerVideo>
                        }
                        
                    </DireitaPost>
                    {
                        
                        (post && post.user && post.user.username) ?
                        
                            ((post.user.username === user.user.username) ?

                                (
                                    <>
                                    <ContainerIcons>
                                        <IconeEditar>
                                            <BsPencil size='20px' color="#fff" onClick = {editPost}/>
                                        </IconeEditar>
                                        <IconeDeletar onClick = {() => setIsOpen(true)}>
                                            <BsFillTrashFill size='20px' color="#fff" />
                                        </IconeDeletar>
                                        
                                    </ ContainerIcons>
                                    </>
                                )
                            :
                            (
                                ""
                            ))
                        : ""
                    }
                </>
                : "Não foi possível obter dados do usuário"
                
            }
            
        </ContainerPost>
    );
}

const IconeDeletar = styled.div `
    position: absolute;
        top: 22px;
        right: 23px;

    cursor: pointer;
`;

const IconeEditar = styled.div `
    position: absolute;
        top: 22px;
        right: 53px;

    cursor: pointer;
    
`;

const ContainerIcons = styled.div `
    
    background-color: yellow;
    
`

const ContainerVideo = styled.div `
    width: 36vw;
    /* height: 350px; */
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