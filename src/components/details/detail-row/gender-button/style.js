import styled from 'styled-components'

export const GenderDiv = styled.div`
   position: absolute;
   left: 10%;
   right: 10%;
`;

export const GenderButton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: ${props => props.side === "R" ? `0px 10px 10px 0px` : `10px 0px 0px 10px`};
    background-color: ${props => props.clicked ? 'black' : 'transparent'};
    color: ${props => props.clicked ? 'white' : 'black'};
    font-size: large;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    @media only screen and (min-width: 960px) {
        &:hover{
            transform: scale(1.1);
        }
    }
`;