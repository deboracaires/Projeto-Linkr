import React from 'react';
import { useState } from "react";
import { BsGeoAlt } from "react-icons/bs"

import { UserInfo, Description, PostInfo, DescriptionLink, Button } from "../../themes/PostsStyle";
import { publish } from "../../service/linkr";
import { LoginValidation } from "../../login";
import styled from 'styled-components';

export default function Publish() {
    const user = LoginValidation()
    const { token } = user;

    const [text, setText] = useState("");
    const [link, setLink] = useState("");

    let body;


    function clearInputs() {
        setText("");
        setLink("");
        window.location.reload();
    }

    function publishPost(event) {
        event.preventDefault();

        if((text || text === "") && link) {
            body = {
                text,
                link
            }

            publish(body, token).then((res) => clearInputs()).catch((err) => console.error)
        } else {
            alert("The link field is mandatory")
        }
    }

    return (
        <div>
            <UserInfo>
                <img src={user.user.avatar} alt="" />
            </UserInfo>
            <PostInfo>
                <Description>
                    <h3>O que você tem pra favoritar hoje?</h3>
                </Description>
                <DescriptionLink>
                    <form onSubmit={publishPost}>
                        <input type="url" placeholder="http://..." value={link} required onChange={(event) => setLink(event.target.value)} />

                        <input type="text" placeholder="Muito irado esse link falando de #javascript" value={text} onChange={(event) => setText(event.target.value)} />
                        <Button type="submit" >Publish</Button>
                    </form>
                    <Location>
                        <BsGeoAlt size='15px' color="#238700"/>
                        <h1>Localização ativada</h1>
                    </Location>
                </DescriptionLink>
                
            </PostInfo>
        </div>
    );
}

const Location = styled.div `
    position: absolute;
    top: 135px;
    display: flex;
    
    h1 {
        color: #238700;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        margin-left: 3px;
    }
    
`;