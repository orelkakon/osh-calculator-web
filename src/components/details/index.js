import React, { useState } from 'react';
import { DetailRow } from "./detail-row/index";
import { calculateBMI, calculateBMR, calculateMassPercentage, MALE } from "./../../utils/detailsCalculations"
import BmRow from "./bm-row"
import { FullPage } from "./style"
import Links from "./links"

export const Details = () => {
    const [weight, setWeight] = useState(60)
    const [height, setHeight] = useState(160)
    const [year, setYear] = useState(2000)
    const [gender, setGender] = useState(MALE)

    return (
        <FullPage>
            <DetailRow title="משקל" unit={`ק"ג`} value={weight} setter={setWeight} />
            <DetailRow title="גובה" unit={`ס"מ`} value={height} setter={setHeight} />
            <DetailRow title="שנת לידה" value={year} setter={setYear} />
            <DetailRow title="מין" value={gender} setter={setGender} />
            <BmRow title="אחוז שומן" calculateValue={calculateMassPercentage(year, weight, height, gender)}></BmRow>
            <BmRow title="BMR" calculateValue={calculateBMR(year, weight, height, gender)}></BmRow>
            <BmRow title="BMI" calculateValue={calculateBMI(weight, height)}></BmRow>
            <Links />
        </FullPage>
    );
};

export default Details;