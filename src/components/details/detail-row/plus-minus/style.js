import styled from 'styled-components'

export const PlusMinusDiv = styled.div`
    position: absolute;
    left: 10%;
    right: 10%;
`;

export const PlusMinusButton = styled.button`
    width: 50px;
    height: 30px;
    border-radius: ${props => props.side === "R" ? `0px 10px 10px 0px` : `10px 0px 0px 10px`};
    background-color: transparent;
    font-size: large;
    font-weight: bold;
    padding: 2px;
    cursor: pointer;
    transition: 0.5s;
    @media only screen and (min-width: 960px) {
        &:hover{
            background-color: black;
            color: white;
            transform: scale(1.1);
        }
    }
`;