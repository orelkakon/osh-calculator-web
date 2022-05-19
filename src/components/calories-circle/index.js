import React from 'react';
import { Icon, Count } from "./style"
import Modal from 'react-modal';
import CaloriesTableModal from "./../calories-table-modal"
import { useSelector } from 'react-redux';
import { getAmounts } from "./../../utils/index"

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

const CaloriesCircle = ({ openCloseModal, modalIsOpen }) => {
    const myDayList = useSelector(state => state);
    const amounts = getAmounts(myDayList)
    const counter = amounts[3]
    return (
        <>
            <Icon onClick={() => openCloseModal()}>
                <Count>
                    {counter}
                </Count>
            </Icon>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={openCloseModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="calories modal"
            >
                <CaloriesTableModal closeModal={openCloseModal} />
            </Modal>
        </>
    );
};

export default CaloriesCircle;