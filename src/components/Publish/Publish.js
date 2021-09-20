import React from 'react';
import { useState } from "react";

import { UserInfo, Description, PostInfo, DescriptionLink, Button } from "../../themes/PostsStyle";
import { publish } from "../../service/linkr";

export default function Publish() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    
    const { token } = user
    const [text, setText] = useState("");
    const [link, setLink] = useState("");

    let body;

    function clearInputs() {
        setText("");
        setLink("")
    }

    function publishPost(event) {
        event.preventDefault();

        if(text && link) {
            body = {
                text,
                link
            }

            publish(body, token).then((res) => clearInputs).catch((err) => console.error)
        } else {
            alert("Preencha corretamente os campos")
        }
    }

    return (
        <div>
            <UserInfo>
                <img src="https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/users/1/avatar" alt="" />
            </UserInfo>
            <PostInfo>
                <Description>
                    <h3>O que você tem pra favoritar hoje?</h3>
                </Description>
                <DescriptionLink>
                    <form onSubmit={publishPost}>
                        <input type="url" placeholder="http://..." value={link} onChange={(event) => setLink(event.target.value)} />

                        <input type="text" placeholder="Muito irado esse link falando de #javascript" value={text} onChange={(event) => setText(event.target.value)} />
                        <Button type="submit" >Publicar</Button>
                    </form>
                </DescriptionLink>
            </PostInfo>
        </div>
    );
}