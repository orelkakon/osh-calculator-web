import styled from 'styled-components'
import { isMobile } from 'react-device-detect';

export const FullMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    width: 100vw;
    height: ${isMobile ? `15vh` :`15vh`};
    background-color: gray;
    bottom: 0;
    position: fixed;
`;

export const MenuButton = styled.button`
    width: 100px;
    height: ${isMobile ? `80px` :`100px`};
    border: none;
    background: ${props => `url(${props.image}) no-repeat center`};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

export const MenuOption = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuTitle = styled.p`
    font-size: ${isMobile ? `13px` :`15px`};
    font-weight: bold;
    color: black;
`;