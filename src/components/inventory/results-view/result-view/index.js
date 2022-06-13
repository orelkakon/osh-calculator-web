import React, { useState } from 'react';
import { FullPage, Title, SubTitle } from "./style"
import { getPercentage } from "./../../../../utils/index"
import PieChartCPF from "./../../../pie-chart-today-values"
import Modal from 'react-modal';
import AddItemDairy from '../../add-item';
import { isMobile } from 'react-device-detect';

const customStyles = {
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '85%',
        height: isMobile ? '45%' : '65%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'gray',
        color: 'white',
    },
};

const ResultView = ({ result }) => {
    const { name, carbs, proteins, fats, grams, calories, kind } = result
    const percentage = getPercentage([carbs, proteins, fats, calories])
    const [modalIsOpen, setIsOpen] = useState(false);
    const openCloseModal = () => setIsOpen(!modalIsOpen)
    return (
        <>
            <FullPage onClick={() => openCloseModal()}>
                <Title>{name}</Title>
                <SubTitle>{kind}</SubTitle>
                <PieChartCPF percentage={percentage} height={['100px', '100px']} width={['100px', '100px']} margin={['0px', '10px']} />
            </FullPage>
            {
                modalIsOpen &&
                <>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={openCloseModal}
                        style={customStyles}
                        ariaHideApp={false}
                        contentLabel="add item to dairy"
                    >
                        <AddItemDairy item={result} />
                    </Modal>
                </>
            }
        </>
    );
};

export default ResultView;