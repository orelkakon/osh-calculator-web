import styled from 'styled-components'
import Profile from './../../assets/osh-homepage.jpg'
import { isMobile } from 'react-device-detect';

export const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: black;
    width: 100vw;
    height: 100vh;
`;

export const Title = styled.h1`
    font-size: 60px;
    color: white;
`;

export const SubTitle = styled.h1`
    font-size: 25px;
    color: white;
    
`;

export const HomePageImage = styled.div`
    height: ${isMobile ? '300px' : '500px'};
    width: ${isMobile ? '300px' : '500px'};
    background: url(${Profile}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;