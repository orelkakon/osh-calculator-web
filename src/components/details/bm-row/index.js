import React from 'react';
import { BmRowDiv, Title, Value } from './style'

const BmRow = ({ title, calculateValue }) => {
    return (
        <BmRowDiv>
            <Title>{title}</Title>
            <Value>{calculateValue}</Value>
        </BmRowDiv>
    );
};

export default BmRow;