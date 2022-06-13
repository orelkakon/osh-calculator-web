import React, { useState } from 'react';
import { FullPage, Title, SubTitle, Values, RowData, RowLine, SliderTitle, ButtonsGroup, SaveButton } from "./style"
import DatePicker from "react-datepicker";
import PieChartCPF from "./../../pie-chart-today-values"
import SlideRule from 'react-slide-rule';
import { calculateCalories, getPercentage, calculateGrams, calculateWeight } from "./../../../utils/index"
import { isMobile } from 'react-device-detect';
import "react-datepicker/dist/react-datepicker.css";
import './style.css'

const STYLE = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const AddItemDairy = ({ item }) => {
    const [startDate, setStartDate] = useState(new Date());
    const { name, carbs, proteins, fats, grams, calories, kind, type} = item
    const initalValue = type === 'byGrams' ? 100 : 1
    const [weight, setWeight] = useState(initalValue);
    const percentage = getPercentage([carbs, proteins, fats, calories])

    const saveItem = () => {
        
    }

    return (
        <FullPage>
            <Title>{name}</Title>
            <SubTitle>{kind}</SubTitle>
            <RowData>
                <ButtonsGroup>
                    <DatePicker id="data-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <SaveButton onClick={saveItem}>שמירה</SaveButton>
                </ButtonsGroup>
                <PieChartCPF percentage={percentage} height={['100px', '300px']} width={['100px', '300px']} margin={['20px', '30px']} />
                <Values>
                    <RowLine color="black">{`משקל: ${calculateWeight(type, weight, grams)}`}</RowLine>
                    <RowLine color="red">{`שומן: ${calculateGrams(type, weight, fats)}`}</RowLine>
                    <RowLine color="blue">{`חלבון: ${calculateGrams(type, weight, proteins)}`}</RowLine>
                    <RowLine color="green">{`פחמימה: ${calculateGrams(type, weight, carbs)}`}</RowLine>
                </Values>
            </RowData>
            <div style={STYLE}>
                <SliderTitle>{`הערך הקלורי: ${calculateCalories(type, weight, calories)} קלוריות`}</SliderTitle>
                <SliderTitle>{`הערך הנוכחי: ${weight} ${type === 'byGrams' ? 'גרם' : 'יחידות'}`}</SliderTitle>
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