import React from 'react';
import { PlusMinusDiv, PlusMinusButton } from "./style"

const PlusMinus = ({changer, value}) => {
    return (
        <PlusMinusDiv>
            <PlusMinusButton side={"R"} onClick={() => changer(value + 1)}>+</PlusMinusButton>
            <PlusMinusButton side={"L"} onClick={() => changer(value - 1)}>-</PlusMinusButton>
        </PlusMinusDiv>
    );
};

export default PlusMinus;