import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ModalBack, ModalContainer } from "./ModalStyle";

export default function Modal ({ cancelar, followUser }) {
    
    return (
        <ModalBack>
            -
            <ModalContainer>
                <h1>Unable to perform this operation</h1>
                <div>
                    <button className="cancelar" onClick={cancelar}>Cancel</button>
                    <button className="excluir" onClick={followUser}>Try again</button>
                </div>
            </ModalContainer>
        </ModalBack>
    );
}