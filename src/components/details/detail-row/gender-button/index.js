import React from 'react';
import { GenderDiv, GenderButton } from "./style"

const Gender = ({value, changer}) => {
    return (
        <GenderDiv>
            <GenderButton side={"R"} clicked={value === "זכר" ? true : false} onClick={() => changer("זכר")}>זכר</GenderButton>
            <GenderButton side={"L"} clicked={value === "נקבה" ? true : false} onClick={() => changer("נקבה")}>נקבה</GenderButton>
        </GenderDiv>
    );
};

export default Gender;