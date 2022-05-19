import styled from 'styled-components'

export const Icon = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    top: 20px;
    right: 10px;
    z-index: 10;
    cursor: pointer;
    &:hover{
        transform: scale(0.8);
        transition-duration: 1s; 
    } 
`;

export const Count = styled.div`
    font-size: 17px;
    font-weight: bold;
    color: black;
`;