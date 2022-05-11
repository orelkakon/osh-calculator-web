import React from 'react';
import { BmRowDiv, Title, Value } from './style'

const BmRow = ({title, func}) => {
    return (
        <BmRowDiv>
            <Title>{title}</Title>
            <Value>{func()}</Value>
        </BmRowDiv>
    );
};

export default BmRow;