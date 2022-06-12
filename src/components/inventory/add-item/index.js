import React, { useState } from 'react';
import { FullPage, Title, Values, RowData, RowLine, Calories } from "./style"
import PieChartCPF from "./../../pie-chart-today-values"
import SlideRule from 'react-slide-rule';
import { calculateCalories, getPercentage, calculateGrams, calculateWeight } from "./../../../utils/index"
import { isMobile } from 'react-device-detect';

const STYLE = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const AddItemDairy = ({ item }) => {
    const { name, carbs, proteins, fats, grams, calories, kind, type} = item
    const initalValue = type === 'byGrams' ? 100 : 1
    const [weight, setWeight] = useState(initalValue);
    const percentage = getPercentage([carbs, proteins, fats, calories])
    return (
        <FullPage>
            <Title>{name}</Title>
            <RowData>
                <PieChartCPF percentage={percentage} height={['120px', '300px']} width={['120px', '300px']} margin={['20px', '30px']} />
                <Calories>{`קלוריות ${calculateCalories(type, weight, calories)}`}</Calories>
                <Values>
                    <RowLine color="black">{`משקל מוצר: ${calculateWeight(type, weight, grams)} גרם`}</RowLine>
                    <RowLine color="red">{`שומן: ${calculateGrams(type, weight, fats)} גרם`}</RowLine>
                    <RowLine color="blue">{`חלבון: ${calculateGrams(type, weight, proteins)} גרם`}</RowLine>
                    <RowLine color="green">{`פחמימה: ${calculateGrams(type, weight, carbs)} גרם`}</RowLine>
                </Values>
            </RowData>
            <div style={STYLE}>
                <p>{`הערך הנוכחי: ${weight} ${type === 'byGrams' ? 'גרם' : 'יחידות'}`}</p>
                {
                    isMobile ? 
                    <SlideRule value={weight} onChange={setWeight} markStyle={{ color: 'yellow' }} max={type === 'byGrams' ? 1500 : 10} step={type === 'byGrams' ? 1 : 0.1} gap={type === 'byGrams' ? 5 : 20} smallerMarkStyle={{ top: 7 }}/>
                    :
                    <SlideRule value={weight} width={600} onChange={setWeight} markStyle={{ color: 'yellow' }} max={type === 'byGrams' ? 1500 : 10} step={type === 'byGrams' ? 1 : 0.1} gap={type === 'byGrams' ? 5 : 20} smallerMarkStyle={{ top: 7 }}/>
                }
            </div>
        </FullPage>
    );
};

export default AddItemDairy;