import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ModalBack, ModalContainer } from "./ModalStyle";

export default function ModalRepost ({ name, cancelar, republishPost }) {
    
    return (
        <ModalBack>
            -
            <ModalContainer>
                <h1>Do you want to republish {name}'s post?</h1>
                <div>
                    <button className="cancelar" onClick={cancelar}>Cancel</button>
                    <button className="excluir" onClick={republishPost}>Yes, I want</button>
                </div>
            </ModalContainer>
        </ModalBack>
    );
}