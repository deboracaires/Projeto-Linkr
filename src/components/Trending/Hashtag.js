import { useHistory } from "react-router"

export default function Hashtag ({hashtag}){
    
    const history = useHistory();

    function redirectHashtag(){
        history.push(`/hashtag/${hashtag.name}`)
    }
    
    return(
            <h4 onClick={redirectHashtag}>
                <strong># {hashtag.name}</strong>
            </h4>
    )
}