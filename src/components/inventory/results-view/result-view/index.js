import React, { useState } from 'react';
import { FullPage, Title, SubTitle } from "./style"
import { getPercentage } from "./../../../../utils/index"
import PieChartCPF from "./../../../pie-chart-today-values"
const ResultView = ({result}) => {
    const {name, carbs, proteins, fats, grams, calories, kind} = result
    const percentage = getPercentage([carbs, proteins, fats, calories])

    return (
        <FullPage>
            <Title>{name}</Title>
            <SubTitle>{kind}</SubTitle>
            <PieChartCPF percentage={percentage} height={['100px','100px']} width={['100px', '100px']} margin={['0px','10px']}/>
        </FullPage>
    );
};

export default ResultView;