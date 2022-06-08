import styled from 'styled-components'

export const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const SaveButton = styled.button`
    width: 120px;
    height: 25px;
    font-size: large;
    cursor: pointer;
    border-radius: 10px;
    background-color: transparent;
    &:hover{
        transform: scale(1.1);
    }
`;

