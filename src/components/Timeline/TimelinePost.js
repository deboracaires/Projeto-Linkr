import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineComment, AiOutlineRetweet} from "react-icons/ai"
import { BsHeart, BsFillTrashFill, BsPencil, BsGeoAlt} from "react-icons/bs";
import { useHistory } from "react-router";
import ReactHashtag from "react-hashtag";
import ModalExcluir from "./ModalExcluir";
import axios from "axios";
import LinkPreview from "./LinkPreview";
import { republish } from "../../service/linkr";
import ModalRepost from "../ModalAlert/ModalRepost";
import ReactPlayer from "react-player";
import ModalLocalizacao from "./ModalLocalizacao";


export default function TimelinePost({post, setLinkPreviewToggle}){
    
    const history = useHistory();
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalRepublish, setModalRepublish] = useState(false);
    let validationURL = post.link.match(/(http(s)?:\/\/.)?(www\.)?(youtube\.)?(com\/watch)([-a-zA-Z0-9@:%_.~#?&//=]*)/g)
    
    const [localizacaoOpen, setLocalizacaoOpen] = useState(false);

    function redirecionar(){
        history.push(`/user/${post.user.id}`)
    }
    
    function directToHashtag(val){
        const hash = val.replace(/#/, "");
        history.push(`/hashtag/${hash}`)
    }

    function republishPost() {
        republish(post.id, user.token).then((res) => setModalRepublish(false))
    }

    function cancelar() {
        setModalRepublish(false)
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
        const config = { headers: { "Authorization": `Bearer ${user.token}` } };
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
    
    return (
        <ContainerPost video={validationURL}>
            <EsquerdaPost>
              
                <img onClick={redirecionar} src={post.user.avatar} alt=""/>
                <div>
                    <BsHeart size='20px' color="#fff"/>
                </div>
                <h3>{post.likes.length} likes</h3>
                <div>
                    <AiOutlineComment size='20px' color="#fff"/>
                </div>
                <h3>{post.commentCount} comments</h3>
                <div onClick={() => setModalRepublish(true)}>
                    <AiOutlineRetweet size='20px' color="#fff"/>
                </div>
                <h3>{post.repostCount} re-posts</h3>

                
            </EsquerdaPost>
            <DireitaPost>
                <div>
                    <h4 onClick={redirecionar}>{post.user.username}</h4>
                    {post.geolocation !== undefined ? <BsGeoAlt size="19px" color="fff" onClick = {() => setLocalizacaoOpen(true)}/> : ""}
                    {
                        localizacaoOpen ?
                        (
                            <ModalLocalizacao key={66666} setLocalizacaoOpen={setLocalizacaoOpen} post={post}/>
                        )
                        :
                        (
                            ""
                        )
                    }
                </div>
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
                {
                    (validationURL === null) ?
                        <ContainerLink onClick={() => setLinkPreviewToggle(<LinkPreview link={post.link} setLinkPreviewToggle={setLinkPreviewToggle}/>)}>

                            <h4>{post.linkTitle}</h4>
                            <h5> {post.linkDescription}</h5>
                            <h6>{post.link}</h6>
                            <img src ={post.linkImage} alt=""/>
                        </ContainerLink>
                        
                        :
                        <ContainerVideo>
                            <ReactPlayer url={validationURL} controls={true} width="32vw" height="18vw" />
                            <h6>{post.link}</h6>
                        </ContainerVideo>
                }
                
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

            {
                modalRepublish ? 
                    (<ModalRepost name={post.user.username} cancelar={cancelar} republishPost={republishPost} />)
                    : ""
            }
            
        </ContainerPost>
    );
}

const ContainerPost = styled.div `
    background-color: #171717;
    width: 42vw;
    border-radius: 16px;
    display: flex;
    padding: 17px 0 20px 8px;
    font-family: 'Lato', sans-serif;
    margin-top: 16px;
    position: relative;
   

`;

const EsquerdaPost = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    margin-right: 10px;
    

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
    width: 37vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
    div {
        display: flex;
    }
    div:hover{
        cursor: pointer;
    }

    h4{
        font-size: 19px;
        font-weight: 400;
        color: #fff;
        height: 23px;
        line-height: 19px;
        border: 1px solid #171717;
        margin: 0 5px 5px 0;
        word-wrap: break-word;
        white-space: nowrap;
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
        max-height: 80px;
        line-height: 20px;
        border: 1px solid #171717;
        width: 35vw;
        margin-bottom: 8px;
        display: inline-block;
        word-wrap: break-word;
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
    width: 36vw;
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
    margin-right: 13px;

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
        font-size: 11px;
        font-weight: 400;
        width: 24vw;
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