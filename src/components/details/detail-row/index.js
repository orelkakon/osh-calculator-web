import React from 'react';
import PlusMinus from './plus-minus';
import Gender from './gender-button';
import { RowDiv, Title, Unit } from "./style"

export const DetailRow = ({ title, unit, value, changer }) => {
    return (
        <RowDiv>
            <Title>{title}</Title>
            {
                title === "מין" ?
                    <Gender value={value} changer={changer} /> :
                    <PlusMinus value={value} changer={changer} />
            }
            {
                title !== "מין" &&
                <Unit>{value + `${unit ? ` ${unit}` : ''}`}</Unit>
            }

        </RowDiv>
    );
};

export default DetailRow;