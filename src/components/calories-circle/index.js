import React, {useState} from 'react';
import { Icon, Count, CaloriesCircleModal } from "./style"
import Modal from 'react-modal';
import CaloriesTableModal from "./../calories-table-modal"
import { useSelector } from 'react-redux';
import { getAmounts } from "./../../utils/index"

const CaloriesCircle = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openCloseModal = () => setIsOpen(!modalIsOpen)
    const myDayList = useSelector(state => state);
    const amounts = getAmounts(myDayList)
    const counter = amounts[3]
    return (
        <>
            <Icon onClick={openCloseModal}>
                <Count>
                    {counter}
                </Count>
            </Icon>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={openCloseModal}
                style={CaloriesCircleModal}
                ariaHideApp={false}
                contentLabel="calories modal"
            >
                <CaloriesTableModal closeModal={openCloseModal} />
            </Modal>
        </>
    );
};

export default CaloriesCircle;