import React from 'react';
import { GenderDiv, GenderButton } from "./style"

const Gender = ({ value, setter }) => {
    const MALE = "זכר"
    const FEMALE = "נקבה"
    return (
        <GenderDiv>
            <GenderButton side={"R"} clicked={value === MALE ? true : false} onClick={() => setter(MALE)}>{MALE}</GenderButton>
            <GenderButton side={"L"} clicked={value === FEMALE ? true : false} onClick={() => setter(FEMALE)}>{FEMALE}</GenderButton>
        </GenderDiv>
    );
};

export default Gender;