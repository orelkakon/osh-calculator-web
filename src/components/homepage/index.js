import React from 'react';
import { FullPage, Title, SubTitle } from './style'
import "./style.css"
import ProfileVideo from './../../assets/v1.mp4'
import { isMobile } from 'react-device-detect';

const HomePage = () => {
    return (
        <FullPage>
            <Title>OSH.</Title>
            <SubTitle>Oshri Ben David <br /> Fitness & Nutritions</SubTitle>
            {
                isMobile ?
                <video className="homepage-video" src={ProfileVideo} autoPlay muted loop controls={false}/>
                :
                <video className="homepage-video" src={ProfileVideo} autoPlay muted loop controls={false}/>
            }
        </FullPage>
    );
};

export default HomePage;