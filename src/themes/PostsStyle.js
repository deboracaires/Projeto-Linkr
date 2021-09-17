import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa"

const Title = styled.h2` 
    width: 70vw;

    color: #ffffff;
    font-size: 46px;
    text-align: start;
    font-family: 'Oswald', sans-serif;
    
    margin: 100px auto 0;
`

const Page = styled.div`
    width: 70vw;

    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    position: relative;

    h4 {
        color: #b7b7b7;
        font-size: 19px;
        text-align: start;
    }

    strong {
        color: #ffffff;
        font-weight: bold;
    }
`

const Posts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PostStyle = styled.div`
    width: 45vw;
    height: 22vw;

    border-radius: 16px;
    margin: 30px auto 30px 0;

    background-color: #171717;
    
    position: relative;
`

const UserInfo = styled.div`
    width: 8vw;
    height: 100%;

    color: #ffffff;
    text-align: center;
    border-radius: 16px 0 0 16px;
    
    position: absolute;
    top: 0;
    left: 0;

    padding: 15px 5px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 5vw;
        height: 5vw;

        border-radius: 50%;
    }
`

const Like = styled(FaRegHeart)`
    width: 16px;
    height: 16px;
    color: #ffffff;

    margin: 15px 10px 3px;
`

const PostInfo = styled.div`
    width: 88%;
    height: 100%;
    
    font-family: 'Lato', sans-serif;

    border-radius: 0 16px 16px 0;

    padding: 0 20px;

    position: absolute;
    top: 0;
    right: 0;
`

const Description = styled.div`
    height: 7vw;
    
    font-family: 'Lato', sans-serif;

    border-radius: 0 16px 16px 0;

    padding: 10px 20px;

    overflow: hidden;

    margin: 0 auto 10px 0;

    h3 {
        color: #ffffff;
        font-size: 21px;

        margin: 0 auto 10px 0;
    }

    h4 {
        color: #b7b7b7;
        font-size: 19px;
    }
`

const Links = styled.div`
    width: 35vw;  
    height: 13vw;

    margin: 5px 20px;
    bottom: 0px;
    right: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border-radius: 12px;
    border: 1px solid #4d4d4d;

    overflow: hidden;
`

const DescriptionLink = styled.div`
    height: 100%;
    
    font-family: 'Lato', sans-serif;

    border-radius: 0 16px 16px 0;

    padding: 20px;

    line-height: 22px;

    h3 {
        color: #ffffff;
        font-size: 19px;

        margin: 0 auto 10px 0;
    }

    h4 {
        color: #b7b7b7;
        font-size: 15px;

        margin: 0 auto 10px 0;
    }
`

const ImageLink = styled.img`
    width: 13vw;
    height: 13vw;

    border-radius: 0 12px 12px 0;
`

export {
    Title,
    Page,
    Posts,
    PostStyle,
    UserInfo,
    Like,
    PostInfo,
    Description,
    Links,
    DescriptionLink,
    ImageLink
}