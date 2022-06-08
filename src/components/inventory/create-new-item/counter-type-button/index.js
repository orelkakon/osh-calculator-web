import React from 'react';
import { CountTypeDiv, CountTypeButton } from "./style"

const CountType = ({countType, setField}) => {
    return (
        <CountTypeDiv>
            <CountTypeButton side={"L"} clicked={countType === "ערכים ל-100 גרם" ? true : false} onClick={() => setField("ערכים ל-100 גרם")}>ערכים ל-100 גרם</CountTypeButton>
            <CountTypeButton side={"R"} clicked={countType === "ערכים למנה" ? true : false} onClick={() => setField("ערכים למנה")}>ערכים למנה</CountTypeButton>
        </CountTypeDiv>
    );
};

export default CountType;