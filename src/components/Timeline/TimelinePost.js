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
                
            </EsquerdaPost>
            <DireitaPost>
                <h1 onClick={redirecionar}>{post.user.username}</h1>
                <p>
                    <ReactHashtag onHashtagClick={val => directToHashtag(val)}>
                        {post.text}
                    </ReactHashtag>
                </p>
                <ContainerLink>
                    <h1>{post.linkTitle}</h1>
                    <p> {post.linkDescription}</p>
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
`;

const DireitaPost = styled.div `
    width: 502px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1{
        font-size: 19px;
        font-weight: 400;
        color: #fff;
        height: 23px;
        
    }

    p {
        font-size: 17px;
        font-weight: 400;
        color: #b7b7b7;
       
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


    img{
        width: 153.44px;
        height: 155px;
        border-radius: 0px 12px 13px 0px;
        position: absolute;
        right: 0;
        top: 0;
    }

    h1 {
        font-size: 16px;
        font-weight: 400;
        color: #cecece;
        width: 250px;
        height: 38px;
        
    }

    p {
        width: 302.82px;
        height: 39px;
        font-size: 11px;
        color: #9b9595;
        
    }
    
    a {
        color: #cecece;
        font-size: 11px;
        font-weight: 400;
    }
`;