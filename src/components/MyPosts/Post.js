import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ReactTooltip from "react-tooltip";
import { postDislike, postLike } from "../../service/linkr";
import { Like, EsquerdaPost, ContainerPost, DireitaPost, ContainerLink, Liked } from "../../themes/PostsStyle";
import ReactHashtag from "react-hashtag";

export default function Post({ post, token }) {
    const history = useHistory()

    let { user, likes } = post
    const [list, setList] = useState([])
    const [like, setLike] = useState(false)
    const [quantLikes, setQuantLike] = useState(0)

    let text = "likes";

    function likePost() {
        if(like === false) {
            setLike(true)
            postLike(post.id, token).then((res) => console.log(res.data)).catch((err) => console.error)
            setQuantLike(quantLikes + 1)
        }
    }

    function dislikePost() {
        if(like === true) {
            setLike(false);
            postDislike(post.id, token).then((res) => console.log(res.data));
            setQuantLike(quantLikes - 1)
        }
    }
    useEffect(() => {

        if (likes.find((usr) => usr.user === user.username )) {
            setList("list")
        }
        setQuantLike(likes.length)
    }, [ user, likes ])
    
    function redirecionar(){
        history.push(`/user/${post.user.id}`)
    }

    function directToHashtag(val){
        const hash = val.replace(/#/, "");
        history.push(`/hashtag/${hash}`)
    }

    
    return (
        <ContainerPost>
            {((user && likes)) ?
                <>
                <EsquerdaPost>
                    <img src={user.avatar} alt="" />
                    {like ?
                        <Liked onClick={dislikePost} />
                        : <Like onClick={likePost} />
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