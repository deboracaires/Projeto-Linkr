import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

import { PostStyle, Page, UserInfo, Description, PostInfo, DescriptionLink, Button } from "../../themes/PostsStyle";
import Trending from "../Trending/Trending";
import { publish } from "../../service/linkr";

export default function Publish() {
    const { user } = useContext(UserContext);

    const { token } = user

    const [text, setText] = useState("");
    const [link, setLink] = useState("");

    let body;

    function publishPost(event) {
        event.preventDefault();

        if(text && link) {
            body = {
                text,
                link
            }

            publish(body, token).then((res) => (setText(""), setLink(""))).catch((err) => console.error)
        } else {
            alert("Preencha corretamente os campos")
        }
    }

    return (
        <Page>
            <PostStyle type="publish">
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
            </PostStyle>
            <Trending />
        </Page>
    );
}