import React from 'react';
import { InputRowDiv, Title, Input } from './style'

const InputRow = ({title, placeholder, itemName, setField, baseline, type}) => {
    return (
        <InputRowDiv baseline={baseline}>
            <Title>{title}</Title>
            {
                itemName ?
                <Input defaultValue={itemName} onChange={e => setField(e.target.value)}/> :
                <Input type={type} placeholder={placeholder} onChange={e => setField(e.target.value)}/>
            }
        </InputRowDiv>
    );
};

export default InputRow;