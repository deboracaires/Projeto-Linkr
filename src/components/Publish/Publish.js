import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

import { PostStyle, Page, UserInfo, Description, PostInfo, DescriptionLink, Button } from "../../themes/PostsStyle";
import Trending from "../Trending/Trending";
import { publish } from "../../service/linkr";

export default function Publish() {
    const { user, token } = useContext(UserContext);

    const [text, setText] = useState("");
    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);


    let body;
    let name = "Publicar";

    // useEffect(() => {
    //     setNameButton(name)
    // })
    

    function publishPost(event) {
        event.preventDefault();
        setLoading(true)
        // name = "Publicando..."
        console.log({text, link})

        if(text && link) {
            body = {
                text,
                link
            }

            publish(body, token).then((res) => (setText(""), setLink(""), setLoading(false))).catch((err) => (alert("Houve um erro ao publicar seu link"), setLoading(false)))
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
                            <input type="url" placeholder="http://..." disabled={loading} value={link} onChange={(event) => setLink(event.target.value)} />

                            <input type="text" placeholder="Muito irado esse link falando de #javascript" disabled={loading} value={text} onChange={(event) => setText(event.target.value)} />
                            <Button type="submit" disabled={loading}>
                                {loading ?
                                    "Publicando..."
                                    : "Publicar"
                                }   
                            </Button>
                        </form>
                    </DescriptionLink>
                </PostInfo>
            </PostStyle>
            <Trending />
        </Page>
    );
}