import styled from "styled-components";

import {DebounceInput} from 'react-debounce-input';
import { useState } from "react";
import { GoSearch } from 'react-icons/go'

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('')
    console.log(searchValue)

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