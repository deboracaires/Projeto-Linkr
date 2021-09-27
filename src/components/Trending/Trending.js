import React, { useState } from 'react';
import { Line, Trends } from "./TrendingStyle";
import { useEffect } from 'react';
import axios from 'axios';
import Hashtag from './Hashtag';
import { useHistory } from 'react-router';

export default function Trending() {
    
    const [hashtags, setHashtags] = useState([]);
    const user = JSON.parse(sessionStorage.getItem("user"));

    useEffect(()=> {
        const config = { headers: { "Authorization": `Bearer ${user.token}` } };

        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/hashtags/trending", config);

        requisicao
            .then(res => {setHashtags(res.data.hashtags)
                            })
            .catch(err => {alert("Houve uma falha ao carregar os posts, por favor atualize a pagina")});

    }, [user.token]);

    const [searchValue, setSearchValue] = useState('')
    const history = useHistory()
    function onEnter(event){
        if(event.key === 'Enter') {
            history.push('/hashtag/' + searchValue)
	    }
    }

    return (
        <Trends>
            <h3>trending</h3>
            <Line />
            {
                hashtags.length === 0 ?
                (
                    <h4><strong>Nenhuma hashtag encontrada</strong></h4>
                )
                :
                (
                    hashtags.map((hashtag)=> <Hashtag key={hashtag.id} hashtag={hashtag}/>)
                )
            }
            <section>
                <span>#</span>
                <input placeholder='type a hashtag' onChange={e => setSearchValue(e.target.value)} onKeyDown={onEnter}></input>
            </section>
        </Trends>
    );
}