import styled from 'styled-components'

export const CountTypeDiv = styled.div`
    margin-top: 20px;
`;

export const CountTypeButton = styled.button`
    width: 160px;
    height: 40px;
    border-radius: ${props => props.side === "R" ? `0px 10px 10px 0px` : `10px 0px 0px 10px`};
    background-color: ${props => props.clicked ? 'black' : 'transparent'};
    color: ${props => props.clicked ? 'white' : 'black'};
    font-size: medium;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    @media only screen and (min-width: 960px) {
        width: 300px;
    }
`;