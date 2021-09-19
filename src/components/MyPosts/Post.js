import { DescriptionLink, Description, ImageLink, PostInfo, Like, Links, UserInfo, PostStyle } from "../../themes/PostsStyle";

export default function Post({ post }) {
    let text = "likes"
    const { user, likes } = post

    console.log(post)

    // if(likes.length === 1) {
    //     text = "like"
    // }

    return (
        <PostStyle type="post">
            {(user && likes) ?
                <div>
                <UserInfo>
                    <img src={user.avatar} alt="" />
                    <Like />
                    <h6>{likes.length} {text}</h6>
                </UserInfo>
                <PostInfo>
                    <Description>
                        <h3>{user.username}</h3>
                        <h4>{post.text}</h4>
                    </Description>
                    <Links onClick={() => window.open(`${post.link}`,"_blank")}>
                        <DescriptionLink>
                            <h3>{post.linkTitle}</h3>
                            <h4>{post.linkDescription}</h4>
                            <h4>{post.link}</h4>
                        </DescriptionLink>
                        <ImageLink src={post.linkImage} alt="" ></ImageLink>
                    </Links>
                </PostInfo>
                </div>
                : ""
            }
            
        </PostStyle>
    );
}