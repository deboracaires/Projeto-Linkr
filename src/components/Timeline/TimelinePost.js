import React from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs"

export default function TimelinePost({posts}){
    return (
        <ContainerPost>
            <EsquerdaPost>
                <img src={posts.user.avatar} alt=""/>
                <div>
                    <BsHeart size='20px' color="#fff"/>
                </div>
                
            </EsquerdaPost>
            <DireitaPost>
                <h1>{posts.user.username}</h1>
                <p>{posts.text}</p>
                <ContainerLink>
                    <h1>{posts.linkTitle}</h1>
                    <p>{posts.linkDescription}</p>
                    <a href={posts.link} rel="noreferrer" target="_blank">{posts.link}</a>
                    <img src ={posts.linkImage} alt=""/>
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