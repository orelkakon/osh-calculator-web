import React, { useState } from 'react';
import { FullPage, InsertInput, MagnifierIcon, PlusIcon } from "./style"
import magnifier from "./../../../assets/magnifier.jpg"
import plus from "./../../../assets/plus.jpg"

const SearchBar = ({results, setFilterdResults}) => {
    const [searchInput, setSearchInput] = useState("")
    const onChangeInput = (e) => {
        e.persist();
        setSearchInput(e.target.value);
        setFilterdResults(results.filter(result => result.name.includes(searchInput)))
    }
    return (
        <FullPage>
            <InsertInput placeholder="שם פריט מזון" onChange={(e) => onChangeInput(e)}/>
            <MagnifierIcon src={magnifier} />
            {
                searchInput.length > 0 &&
                <PlusIcon src={plus}/>
            }
        </FullPage>
    );
};

export default SearchBar;