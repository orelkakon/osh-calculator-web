import styled from 'styled-components'

export const InputRowDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${props => props.baseline ? `` :`solid 2px black`};
    width: 100%;
    direction: rtl;
`;

export const Title = styled.p`
    font-weight: bold;
    font-size: x-large;
    color: black;
    padding-right: 5px;
`;

export const Input = styled.input`
    padding-right: 5px;
    border-radius: 10px;
    font-size: 16px;
`;