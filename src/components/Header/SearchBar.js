import styled from "styled-components";

import {DebounceInput} from 'react-debounce-input';
import { useEffect, useState } from "react";
import { GoSearch } from 'react-icons/go'

import axios from "axios";

export default function SearchBar() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    

    const [searchValue, setSearchValue] = useState('...');

    const [searchUsersList, setSearchUsersList] = useState([]);
    const requestURL = `https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/users/search?username=${searchValue}`;

    console.log(requestURL)
    console.log(searchUsersList)
    

    useEffect(() => {
        const config = { headers: { "Authorization": `Bearer ${user.token}` } };
        
        
        const promise = axios.get(requestURL, config);

        promise
            .then(res => {
            setSearchUsersList(res.data.users);
            })
            .catch(err => console.log(err))
        
    }, [requestURL, user.token]);
    
     

    return (
        <ContainerSearch>
            <div>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                onChange={event => setSearchValue(event.target.value)}
                placeholder='Search for people and friends' />
                
            <GoSearch color='#C6C6C6' size='25px' />
            </div>
        </ContainerSearch>
    )
}

const ContainerSearch = styled.div`
    div {
        width: 563px;
        height: 45px;

        padding: 10px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 8px;
        background-color: white;

        input {
            width: 100%;
            height: 100%;
            outline: none;

            ::placeholder {
                font-family: Lato;
                color: #C6C6C6;
            }
        }
    }
`