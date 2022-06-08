import React, { useState } from 'react';
import Modal from 'react-modal';
import { FullPage, InsertInput, MagnifierIcon, PlusIcon } from "./style"
import magnifier from "./../../../assets/magnifier.jpg"
import plus from "./../../../assets/plus.jpg"
import CreateNewItem from '../create-new-item';

const customStyles = {
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '85%',
        height: '40%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'gray',
        color: 'white',
    },
};
const SearchBar = ({ results, setFilterdResults }) => {
    const [searchInput, setSearchInput] = useState("")
    const [modalIsOpen, setIsOpen] = useState(false);
    const onChangeInput = (e) => {
        setSearchInput(e.target.value);
        setFilterdResults(results.filter(result => result.name.includes(searchInput)))
    }
    const openCloseModal = () => setIsOpen(!modalIsOpen)
    return (
        <FullPage>
            <InsertInput placeholder="שם פריט מזון" onChange={onChangeInput} />
            <MagnifierIcon src={magnifier} />
            {
                searchInput.length > 0 &&
                <>
                    <PlusIcon src={plus} onClick={openCloseModal} />
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={openCloseModal}
                        style={customStyles}
                        ariaHideApp={false}
                        contentLabel="create new item modal"
                    >
                        <CreateNewItem name={searchInput}/>
                    </Modal>
                </>
            }
        </FullPage>
    );
};

export default SearchBar;