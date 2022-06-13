import React from 'react';
import PlusMinus from './plus-minus';
import Gender from './gender-button';
import { RowDiv, Title, Unit } from "./style"

export const DetailRow = ({ title, unit, value, setter }) => {
    const GENDER = "מין"
    return (
        <RowDiv>
            <Title>{title}</Title>
            {
                title === GENDER ?
                    <Gender value={value} setter={setter} /> :
                    <PlusMinus value={value} setter={setter} />
            }
            {
                title !== GENDER &&
                <Unit>{value + `${unit ? ` ${unit}` : ''}`}</Unit>
            }

        </RowDiv>
    );
};

export default DetailRow;