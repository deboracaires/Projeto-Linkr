import styled from "styled-components"

import { MdClose } from "react-icons/md";

export default function LinkPreview({ link, setLinkPreviewToggle }) {
    console.log('foi?' + setLinkPreviewToggle)

    return (
        <>
            <BackgroundFilter />
            <ContainerLinkPreview>
                <header>
                    <button onClick = {() => window.open(link, '_blank')}>Open in new tab</button>
                    <MdClose size='40px' color='white' cursor='pointer' onClick={() => setLinkPreviewToggle('')}/>
                </header>
                <iframe src={link} width = "100%" height = "100%" />
            </ContainerLinkPreview>
        </>
    )
}

const BackgroundFilter = styled.div `
    position: fixed;
    left: 0;
    top: 0;

    width: 100vw;
    height: 100vh;
    z-index: 2;

    background-color: white;
    opacity: 0.7;
`;

const ContainerLinkPreview = styled.div `
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    width: 966px;
    height: 800px;
    
    
    border-radius: 20px;
    padding: 20px;

    background: #333333;

    header {
        width: 100%;
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 10px;

        button {
            width: 138px;
            height: 31px;
            border-radius: 5px;

            background-color: #1877F2;
            color: white;
            font-family: Lato;
            font-weight: bold;

            cursor: pointer;
        }
    }
`;

