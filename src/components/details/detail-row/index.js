import React from 'react';
import PlusMinus from './plus-minus';
import GenderButton from './gender-button';
import { RowDiv, Title, Unit } from "./style"

export const DetailRow = ({ title, unit, value, changer }) => {
    return (
        <RowDiv>
            <Title>{title}</Title>
            {
                title === "מין" ?
                <GenderButton />:
                <PlusMinus />
            }
            <Unit>{value + `${unit ? ` ${unit}` : ''}`}</Unit>

        </RowDiv>
    );
};

export default DetailRow;