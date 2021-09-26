import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa"

const Title = styled.h2` 
    width: 60vw;

    color: #ffffff;
    font-size: 46px;
    text-align: start;
    font-family: 'Oswald', sans-serif;
    border: 1px solid #333333;
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    overflow: hidden;
`

const Page = styled.div`
    width: 65vw;

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
    height: ${(props) => props.type === "post" ? "22vw" : "13vw" };

    border-radius: 16px;
    margin: 30px auto 30px 0;

    background-color: ${(props) => props.type === "post" ? "#171717" : "#ffffff" };
    
    position: relative;
`

const UserInfo = styled.div`
    width: 7vw;
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
        width: 3vw;
        height: 3vw;

        border-radius: 50%;
    }
`

const Like = styled(FaRegHeart)`
    width: 16px;
    height: 16px;

    color: #ffffff;


    cursor: pointer;

    margin: 15px 10px 3px;
`

const Liked = styled(FaHeart)`
    width: 16px;
    height: 16px;

    color: #AC0000;


    cursor: pointer;

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
    height: ${(props) => props.type === "post" ? "7vw" : "3vw"};
    
    font-family: 'Lato', sans-serif;

    border-radius: 0 16px 16px 0;

    padding: ${(props) => props.type === "post" ? "10px 20px" : "20px"};

    overflow: hidden;

    h3 {
        color: ${(props) => props.type === "post" ? "#ffffff" : "#707070"};
        font-size: 21px;
        font-weight: ${(props) => props.type === "post" ? "400" : "300"};
        margin: 0 auto 10px 0;
        line-height: 21px;
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
    
    font-family: 'Lato', sans-serif;

    border-radius: 0 16px 16px 0;

    padding: ${(props) => props.type === "post" ? "20px" : "0 20px"};

    line-height: 22px;
    text-align: right;

    position: relative;

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

    input {
        width: 100%;

        font-weight: 400;

        margin: 10px 0;
        padding: 0 15px;

        border-radius: 5px;
        background-color: #efefef;

        outline: 0;
    }

    input:first-child {
        height: 35px;
    }

    input:nth-child(2) {
        height: 55px;
    }

    input::placeholder {
        color: #949494;
    }
`

const ImageLink = styled.img`
    width: 13vw;
    height: 13vw;

    border-radius: 0 12px 12px 0;
`

const Button = styled.button`
    width: 5vw;
    height: 31px;

    color: #ffffff;
    font-weight: bold;

    cursor: pointer;

    background: #1877f2;
    border-radius: 5px;
`


const ContainerPost = styled.div `
    background-color: #171717;
    width: 611px;
    height: 276px;
    border-radius: 16px;
    display: flex;
    padding: 17px 0 20px 0;
    font-family: 'Lato', sans-serif;
    margin-top: 16px;
   

`;

const EsquerdaPost = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 86px;
    

    img{
        width: 50px;
        height: 50px;
        border-radius: 26px;

        cursor: pointer;
    }
    div {
        margin-top: 19px;
    }
    h3 {
        margin-top: 3px;
        font-size: 11px;
        font-weight: 400;
        color: #fff;
        cursor: alias;
    }
`;

const DireitaPost = styled.div `
    width: 502px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
    


    h4{
        font-size: 19px;
        font-weight: 400;
        color: #fff;
        height: 23px;
        line-height: 23px;
        border: 1px solid #171717;
        width: 500px;
        word-wrap: break-word;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        
    }

    h5 {
        font-size: 17px;
        font-weight: 400;
        color: #b7b7b7;
        height: 40px;
        line-height: 20px;
        border: 1px solid #171717;
        width: 500px;
        word-wrap: break-word;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
       
    } 
    
    span {
        color: #fff;
        font-weight: 700;
    }
    
`;



const ContainerLink = styled.div `
    width: 503px;
    height: 155px;
    border: 1px solid #4d4d4d;
    border-radius: 11px;
    position: relative;
    padding-left: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    background-color: #171717;
    z-index: 1000;
    cursor: pointer;

    img{
        width: 153.44px;
        height: 155px;
        border-radius: 0px 12px 13px 0px;
        position: absolute;
        right: 0;
        top: 0;
    }

    h4 {
        font-size: 16px;
        font-weight: 400;
        color: #cecece;
        width: 250px;
        height: 38px;
        line-height: 19px;
        border: 1px solid #171717;
        word-wrap: break-word;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }

    h5 {
        width: 302.82px;
        height: 39px;
        font-size: 11px;
        color: #9b9595;
        line-height: 13px;
        border: 1px solid #171717;
        word-wrap: break-word;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
        
        
    }
    
    a {
        color: #cecece;
        font-size: 11px;
        font-weight: 400;
        width: 260px;
        height: 13px;
        line-height: 13px;
        border: 1px solid #171717;
        word-wrap: break-word;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
`;

const ContainerPosts = styled.div `
    
    margin-top: 15px;
    display: flex;
    flex-direction: column;

    h2 {
        font-family: 'Lato', sans-serif;
        font-size: 30px;
        margin-top: 80px;
        color: #fff;
    }
    
`;

export {
    Title,
    Page,
    Posts,
    PostStyle,
    UserInfo,
    Like,
    Liked,
    PostInfo,
    Description,
    Links,
    DescriptionLink,
    ImageLink,
    Button,
    ContainerPost,
    EsquerdaPost,
    DireitaPost,
    ContainerLink,
    ContainerPosts
}