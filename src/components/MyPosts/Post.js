import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ReactTooltip from "react-tooltip";
import { getLikes, postLike } from "../../service/linkr";
import { Like, Links, EsquerdaPost, ContainerPost, DireitaPost, ContainerLink } from "../../themes/PostsStyle";
import ReactHashtag from "react-hashtag";

export default function Post({ post }) {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    const { userLog, token } = userData;

    const history = useHistory()
    
    let text = "likes"
    let pessoas = "0 curtidas";
    const { user, likes } = post
    const [list, setList] = useState([])
    const [like, setLike] = useState(false)

    console.log(userLog)
    function likePost() {
        console.log("likePost")
        if(like === false) {
            setLike(true)
            postLike(post.id, token).then((res) => console.log(res.data)).catch((err) => console.error)
        } else {
            setLike(false)
            setList(true)
        }
    }

    useEffect(() => {
        likes.map((like, index) => getLikes(like.userId, token).then((res) => 
            (index < 2 ? 
                setList(list + ", " + res.data.user.username)
                : setList(list + " e outros participantes"))))
        // getLikes(post.likes[0].userId, token).then((res) => console.log(res.data))
        console.log(list)

        // if(list.length > 0) {
        //     if (!(list.find((name) => (name === userLog.username)))){
        //         if(list.length > 2) {
        //             pessoas = `Você, ${list[0] + ", " + list[1]} e outras ${list.length - 3} pessoas curtiram esse post`
        //         } else if(list.length === 2 ) {
        //             pessoas = `Você e ${ list[0] } curtiram esse post`
        //         } else {
        //             pessoas = "Você curtiu esse post"
        //         }
        //     } else {
        //         if(list.length > 1) {
        //             pessoas = `${list[0] + ", " + list[1]} e outras ${list.length - 2} pessoas curtiram esse post`
        //         } else if(list.length === 2 ) {
        //             pessoas = `${ list[0] + ", " + list[1] } curtiram esse post`
        //         } else {
        //             pessoas = `${ list[0] } curtiu esse post`
        //         }
        //         console.log("entrou")
        //     }
        // }
    }, [])
    
    function redirecionar(){
        history.push(`/user/${post.user.id}`)
    }

    function directToHashtag(val){
        const hash = val.replace(/#/, "");
        history.push(`/hashtag/${hash}`)
    }

    return (
        <ContainerPost>
            {(user && likes) ?
                <>
                <EsquerdaPost>
                    <img src={user.avatar} alt="" />
                    <Like selected={like} onClick={likePost} />
                    <ReactTooltip />
                    <h3 data-tip={pessoas}>{likes.length} {text}</h3>
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
                        <a>{post.link}</a>
                        <img src={post.linkImage} alt="" />
                    </ContainerLink>
                </DireitaPost>
                </>
                : ""
            }
            
        </ContainerPost>
    );
}