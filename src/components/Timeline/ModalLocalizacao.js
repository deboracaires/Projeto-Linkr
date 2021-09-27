import styled from "styled-components";
import GoogleMapReact from 'google-map-react';


export default function ModalLocalizacao({setLocalizacaoOpen, post}){
    
    const lng = parseFloat(post.geolocation.longitude);
    const lat = parseFloat(post.geolocation.latitude);
    
    const 
        posicao =  {lat, lng}
    ;
    
    return(
        <div>
            <ModalBack>
                
            </ModalBack>
            <ModalContainer>
                    <h1>{post.user.username}'s localization</h1>
                    <button onClick={() => setLocalizacaoOpen(false)}>X</button>
                    <div style={{ height: '35vh', width: '95%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{key: "AIzaSyCK0EKEU0pceC6h98P26badDnFquIXUHPc"}}
                            defaultZoom={15}
                            defaultCenter={posicao}
                        >
                            
                        </GoogleMapReact>
                    </div>
            </ModalContainer>
        </div>
    );
}

const ModalBack = styled.div `
    width: 100000px;
    height: 1000000px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: 0.5;
`;
const ModalContainer = styled.div `
    position: fixed;
    z-index: 5000;
    top: 50%;
    bottom: auto;
    left: 30%;
    right: auto;
    width: 45vw;
    height: 50vh;
    background-color: #333333;
    border-radius: 50px;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-top: 20px;
    opacity: 1;

    h1 {
        font-weight: 700;
        font-size: 34px;
        line-height: 41px;
        width: 40vw;
        height: 82px;
        color: #FFFFFF;
        word-wrap: break-word;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
    
    button {
        background-color: #333333;
        color: #fff;
        font-size: 34px;
        position: absolute;
        right: 25px;
        top: 15px;
    }

    button:hover{
        cursor: pointer;
    }
`;