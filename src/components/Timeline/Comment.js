import styled from "styled-components"

export default function Comment() {
    return (
        <ContainerComment>
            <img src='https://pbs.twimg.com/profile_images/1078278632290832386/nOeGNCpC_400x400.jpg'></img>
            <div>
                <section>
                    <h2>nome usuario</h2>
                    <h3>• status</h3>
                </section>
                <p>texto</p>
            </div>
        </ContainerComment>
    )
}

const ContainerComment = styled.div `
    width: 580px;

    display: flex;

    padding: 10px 0;

    border-bottom: 2px solid #353535;

    

    img {
        width: 40px;
        height: 40px;

        margin-right: 10px;

        border-radius: 50%;
    };

    section {
        display: flex;

        h2 {
            margin: 0 10px 0 0;
            font-size: 15px;
            font-family: Lato;

        };

        h3 {
            font-size: 15px;
            font-family: Lato;
            font-weight: normal;

            color: #565656;
        }

    }

    p {
        color: #ACACAC;
        font-family: Lato;
        font-weight: normal;
    }
   
    
`;