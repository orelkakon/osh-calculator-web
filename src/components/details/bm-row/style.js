import styled from 'styled-components'

export const BmRowDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 4px black;
    height: 8%;
    width: 100%;
    direction: rtl;
    @media only screen and (min-width: 960px) {
        height: 8%;
    }
`;

export const Title = styled.p`
    font-weight: bold;
    font-size: x-large;
    color: black;
    padding-right: 5px;
`;

export const Value = styled.p`
    font-weight: bold;
    font-size: x-large;
    color: black;
    padding-left: 5px;
`;