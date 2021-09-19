import React from 'react';
import styled from "styled-components"

export default function LoginBackground() {
    return (
        <Background>
            <ContainerText>
                <Title>linkr</Title>
                <Subtitle>save, share and discover <br/> the best links on the web</Subtitle>
            </ContainerText>
        </Background>
    )
}

const Background = styled.div `
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #151515;
`

const ContainerText = styled.div `
    color: white;
`

const Title = styled.h1 `
    font-size: 106px;
    font-family: 'Passion One', cursive;
`

const Subtitle = styled.h2 `
    font-size: 43px;
`