import styled from 'styled-components'
import ProfileVideo from './../../assets/v1.mp4'
import { isMobile } from 'react-device-detect';

export const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: linear-gradient(to top, black 0%, gray 100%);
    width: 100vw;
    height: 100vh;
    position: fixed;
`;

export const Title = styled.h1`
    font-size: 60px;
    color: white;
`;

export const SubTitle = styled.h1`
    font-size: 25px;
    color: white;
    margin: 0;
    
`;

export const HomePageVideo = styled.video`
    height: ${isMobile ? '350px' : '400px'};
    width: ${isMobile ? '75%' : '25%'};
    background:  url(${ProfileVideo});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border-radius: 10px;
`;