import React from 'react';
import { FullPage, Title, HomePageVideo, SubTitle } from './style'

const HomePage = () => {
    return (
        <FullPage>
            <Title>OSH.</Title>
            <SubTitle>Oshri Ben David <br /> Fitness & Nutritions</SubTitle>
            <HomePageVideo autoplay muted loop />
        </FullPage>
    );
};

export default HomePage;