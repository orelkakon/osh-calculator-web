import styled from 'styled-components'

export const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: solid 2px black;
    width: 100%;
    direction: rtl;
`;

export const Title = styled.p`
    font-weight: bold;
    font-size: large;
    color: black;
    padding-right: 5px;
`;

export const Unit = styled.p`
    font-weight: bold;
    font-size: large;
    color: black;
    padding-left: 5px;
`;