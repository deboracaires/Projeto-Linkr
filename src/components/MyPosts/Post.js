import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ReactTooltip from "react-tooltip";
import { getLikes, postDislike, postLike } from "../../service/linkr";
import { Like, EsquerdaPost, ContainerPost, DireitaPost, ContainerLink, Liked } from "../../themes/PostsStyle";
import ReactHashtag from "react-hashtag";
import { LoginValidation } from "../../login";
/*eslint-disable*/
export default function Post({post}) {
    const userData = LoginValidation()
    const { user, token } = userData;
    
    const history = useHistory()

    let { likes } = post
    const [list, setList] = useState("")
    let [like, setLike] = useState(0)
    const [quantLikes, setQuantLike] = useState(0)
    const [likesInPost, setLikesInPost] = useState(likes)
    let [name1, setName1] = useState("")
    let [name2, setName2] = useState("")
    let nomeList = "Outro nome"

    let text = "likes";

    useEffect(() => {
        setList(text)

        setQuantLike(likes.length)

        if(post && likesInPost !== [] && (likesInPost.find((us) => us.userId === user.id))) {
            setLike(1)
        }

        setLike((likes.find((us) => us.userId == user.id)) ?
        like = 1 : like = 0)

        if (like === 1 && likesInPost.length > 0 && likesInPost.find((us) => us.userId === user.id) ) {
            let text = likesInPost.filter((nameUser) => nameUser.userId !== user.id)
            
            nomeList = getNames(text[0].userId, text[1].userId)
            
            if (likesInPost.length > 2) {
                setList(`Você, ${nomeList.name1}, ${nomeList.name2} e mais ${likesInPost.length - 3} pessoas curtiram`)
            } else if (likesInPost.length == 2) {
                setList(`Você e ${nomeList.name1} curtiram`)
            } else if (likesInPost.length == 1) {
                setList(`Você curtiu esse post`)
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
        <ContainerPost>
            {((user)) ?
                <>
                    <EsquerdaPost>
                        <img src={post.user.avatar} alt="" />
                        {(like === 1) ?
                            <Liked onClick={() => dislikePost()} />
                            : <Like onClick={() => likePost()} />
                        }
                        <ReactTooltip />
                        <h3 data-tip={list}>{quantLikes} {text}</h3>
                    </EsquerdaPost>
                    <DireitaPost>
                        <h4 onClick={redirecionar}>{post.user.username}</h4>
                        <h5>
                            <ReactHashtag onHashtagClick={val => directToHashtag(val)}>
                                {post.text}
                            </ReactHashtag>
                        </h5>
                        <ContainerLink onClick={() => window.open(`${post.link}`,"_blank")}>
                            <h4>{post.linkTitle}</h4>
                            <h5>{post.linkDescription}</h5>
                            <a href={post.link}>{post.link}</a>
                            <img src={post.linkImage} alt="" />
                        </ContainerLink>
                    </DireitaPost>
                </>
                : ""
            }
            
        </ContainerPost>
    );
}