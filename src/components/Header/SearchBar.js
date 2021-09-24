import styled from "styled-components";

import {DebounceInput} from 'react-debounce-input';
import { useState } from "react";

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('')
    console.log(searchValue)

    return (
        <ContainerSearch>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                onChange={event => setSearchValue(event.target.value)} />
        </ContainerSearch>
    )
}

const ContainerSearch = styled.div`

`