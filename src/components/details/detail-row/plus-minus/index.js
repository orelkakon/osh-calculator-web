import React from 'react';
import { PlusMinusDiv, PlusMinusButton } from "./style"

const PlusMinus = ({ setter, value }) => {
    return (
        <PlusMinusDiv>
            <PlusMinusButton side={"R"} onClick={() => setter(value + 1)}>+</PlusMinusButton>
            <PlusMinusButton side={"L"} onClick={() => setter(value - 1)}>-</PlusMinusButton>
        </PlusMinusDiv>
    );
};

export default PlusMinus;