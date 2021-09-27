import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BsHeart, BsFillTrashFill, BsPencil } from "react-icons/bs";
import { AiOutlineComment } from 'react-icons/ai'
import { useHistory } from "react-router";
import ReactHashtag from "react-hashtag";
import ModalExcluir from "./ModalExcluir";
import axios from "axios";
import LinkPreview from "./LinkPreview";

import Comment from "./Comment";


export default function TimelinePost({post, setLinkPreviewToggle}){
    
    const history = useHistory();
    const user = JSON.parse(sessionStorage.getItem("user"));
    const config = { headers: { "Authorization": `Bearer ${user.token}`}};
    const [modalIsOpen, setIsOpen] = useState(false);

    function redirecionar(){
        history.push(`/user/${post.user.id}`)
    }

    function directToHashtag(val){
        const hash = val.replace(/#/, "");
        history.push(`/hashtag/${hash}`)
    }


    const inputRef = useRef(null);
    const [isInEdit, setIsInEdit] = useState(false);
    const [postTextValue, setPostTextValue] = useState(post.text)

    useEffect(() => {
        if (isInEdit) {
          inputRef.current.focus();
        }
      }, [isInEdit]);

    function editPost() {   
        setIsInEdit(!isInEdit)
        
    };

    function escOrEnter(event){
        
        const body = {
            "text": postTextValue
        }

		if(event.key === 'Escape') {
			setIsInEdit(false)
	    }
        if(event.key === 'Enter') {
            const promise = axios.put(`https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts/${post.id}`, body, config);
            setIsInEdit(false)

            promise
                .then(setTimeout(()=>window.location.reload(), 500))
                .catch(() => {
                    alert('unable to save changes');
                    setIsInEdit(true)
                })
	    }
    }

    const [commentsList, setCommentsList] = useState({comments: []});
    console.log(commentsList)

    useEffect(()=> {
        const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts/${post.id}/comments`, config);

        requisicao
            .then(res => {
                setCommentsList(res.data);
                
            })
            .catch(err => {alert("Houve uma falha ao carregar os posts, por favor atualize a pagina")})
    }, []);

    return (
        <ContainerComments>
            <ContainerPost>
                <EsquerdaPost>
                
                    <img onClick={redirecionar} src={post.user.avatar} alt=""/>
                    <div>
                        <BsHeart size='20px' color="#fff"/>
                    </div>
                    <h3>{post.likes.length} likes</h3>
                    <div>
                        <AiOutlineComment size='20px' color="#fff"/>
                    </div>
                    <h3>{commentsList.comments.length} comments</h3>
                    
                </EsquerdaPost>
                <DireitaPost>
                    <h4 onClick={redirecionar}>{post.user.username}</h4>
                    <h5>
                        {
                            isInEdit ?
                            (
                                <input value={postTextValue} ref={inputRef} type='text' onChange={e => setPostTextValue(e.target.value)} onKeyDown={escOrEnter}></input>
                            )
                            :
                            (
                                <ReactHashtag onHashtagClick={val => directToHashtag(val)} >
                                    {post.text}
                                </ReactHashtag>
                            )
                        }
                        
                    </h5>
                    <ContainerLink onClick={() => setLinkPreviewToggle(<LinkPreview link={post.link} setLinkPreviewToggle={setLinkPreviewToggle}/>)}>
                        <h4>{post.linkTitle}</h4>
                        <h5> {post.linkDescription}</h5>
                        <h6>{post.link}</h6>
                        <img src ={post.linkImage} alt=""/>
                    </ContainerLink>
                </DireitaPost>
                {
                    post.user.username === user.user.username ?

                    (
                        <ContainerIcons>
                            <IconeEditar>
                                <BsPencil size='20px' color="#fff" onClick = {editPost}/>
                            </IconeEditar>
                            <IconeDeletar onClick = {() => setIsOpen(true)}>
                                <BsFillTrashFill size='20px' color="#fff" />
                            </IconeDeletar>
                            
                        </ ContainerIcons>
                    )
                    :
                    (
                        ""
                    )
                }
                {
                    modalIsOpen ?
                    (
                        <ModalExcluir key = {23} setIsOpen={setIsOpen} post={post} />
                    )
                    :
                    (
                        ""
                    )
                }
                
            </ContainerPost>
            {commentsList.comments.map(comment => <Comment />)}
            
        </ContainerComments>
    );
}

const ContainerComments = styled.div `

    margin-top: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 16px;

    background-color: #1E1E1E;
`;

const ContainerPost = styled.div `
    background-color: #171717;
    width: 611px;
    height: 276px;
    border-radius: 16px;
    display: flex;
    padding: 17px 0 20px 0;
    font-family: 'Lato', sans-serif;
    
    position: relative;
   

`;

const EsquerdaPost = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 86px;
    

    img{
        width: 50px;
        height: 50px;
        border-radius: 26px;
    }
    img:hover{
        cursor: pointer;
    }
    div {
        margin-top: 19px;
    }
    h3 {
        margin-top: 3px;
        font-size: 11px;
        font-weight: 400;
        color: #fff;
    }
    div:hover{
        cursor: pointer;
    }
    
`;

const DireitaPost = styled.div `
    width: 502px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
    


    h4{
        font-size: 19px;
        font-weight: 400;
        color: #fff;
        height: 23px;
        line-height: 23px;
        border: 1px solid #171717;
        width: 500px;
        word-wrap: break-word;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
        
        
    }
    h4:hover{
        cursor: pointer;
    }

    h5 {
        font-size: 17px;
        font-weight: 400;
        color: #b7b7b7;
        height: 40px;
        line-height: 20px;
        border: 1px solid #171717;
        width: 500px;
        word-wrap: break-word;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;

        input {
            width: inherit;
            height: inherit;
        }
       
    } 
    
    span {
        color: #fff;
        font-weight: 700;
    }

    span:hover{
        cursor: pointer;
    }
    
`;



const ContainerLink = styled.div `
    width: 503px;
    height: 155px;
    border: 1px solid #4d4d4d;
    border-radius: 11px;
    position: relative;
    padding-left: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    background-color: #171717;
    z-index: 0;

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
        width: 250px;
        height: 38px;
        line-height: 19px;
        border: 1px solid #171717;
        word-wrap: break-word;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }

    h5 {
        width: 302.82px;
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
        font-size: 11px;
        font-weight: 400;
        width: 260px;
        height: 13px;
        line-height: 13px;
        border: 1px solid #171717;
        word-wrap: break-word;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
`;

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