import React, { useState } from 'react';
import { FullPage } from "./style"
import CaloriesCircle from "./../calories-circle"

const Inventory = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openCloseModal = () => setIsOpen(!modalIsOpen)
    const closeModal = () => setIsOpen(false)
    return (
        <FullPage>
            <CaloriesCircle countert={1763} openCloseModal={openCloseModal} modalIsOpen={modalIsOpen} />
        </FullPage>
    );
};

export default Inventory;