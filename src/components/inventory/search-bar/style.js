import styled from 'styled-components'

export const FullPage = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 90px;
    width: 100%;
    height: 5%;
    background-color: gray;
`;

export const InsertInput = styled.input`
    direction: rtl;
    width: 40%;
    height: 60%;
    border-radius: 10px;
    padding-right: 4px;
    font-size: 16px;
`;

export const MagnifierIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 5px;
`;

export const PlusIcon = styled.img`
    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;