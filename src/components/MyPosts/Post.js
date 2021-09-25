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
    console.log(user)
    let { likes } = post
    const [list, setList] = useState([])
    let [like, setLike] = useState(0)
    const [quantLikes, setQuantLike] = useState(0)
    const [likesInPost, setLikesInPost] = useState(likes)
    console.log(post.likes)
    let text = "likes";

    useEffect(() => {
        setQuantLike(0)
        // if (likes.find((usr) => usr.userId === user.id )) {
        //     setLike(true)
        // }

        // getLikes(post.user.id, token).then((res) => console.log(res.data))

        setQuantLike(likes.length)

        if(post && likesInPost !== [] && (likesInPost.find((us) => us.userId === user.id))) {
            setLike(1)
        }

        setLike((likes.find((us) => us.userId == user.id)) ?
        like = 1 : like = 0)
    }, [])

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

    
console.log(like)
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
                        <h3 data-tip={3}>{quantLikes} {text}</h3>
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