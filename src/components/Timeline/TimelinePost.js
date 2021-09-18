import React from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import { useHistory } from "react-router";
import ReactHashtag from "react-hashtag";

export default function TimelinePost({post}){
    
    const history = useHistory();

    function redirecionar(){
        history.push(`/user/${post.user.id}`)
    }

    function directToHashtag(val){
        const hash = val.replace(/#/, "");
        history.push(`/hashtag/${hash}`)
    }
    
    return (
        <ContainerPost>
            <EsquerdaPost>
              
                <img onClick={redirecionar} src={post.user.avatar} alt=""/>
                <div>
                    <BsHeart size='20px' color="#fff"/>
                </div>
                <h3>{post.likes.length} likes</h3>
                
            </EsquerdaPost>
            <DireitaPost>
                <h4 onClick={redirecionar}>{post.user.username}</h4>
                <h5>
                    <ReactHashtag onHashtagClick={val => directToHashtag(val)}>
                        {post.text}
                    </ReactHashtag>
                </h5>
                <ContainerLink>
                    <h4>{post.linkTitle}</h4>
                    <h5> {post.linkDescription}</h5>
                    <a href={post.link} rel="noreferrer" target="_blank">{post.link}</a>
                    <img src ={post.linkImage} alt=""/>
                </ContainerLink>
            </DireitaPost>
        </ContainerPost>
    );
}

const ContainerPost = styled.div `
    background-color: #171717;
    width: 611px;
    height: 276px;
    border-radius: 16px;
    display: flex;
    padding: 17px 0 20px 0;
    font-family: 'Lato', sans-serif;
    margin-top: 16px;
   

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
    div {
        margin-top: 19px;
    }
    h3 {
        margin-top: 3px;
        font-size: 11px;
        font-weight: 400;
        color: #fff;
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
       
    } 
    
    span {
        color: #fff;
        font-weight: 700;
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
    z-index: 1000;


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
    
    a {
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