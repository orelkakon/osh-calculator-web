import React, { useState } from 'react';
import { DetailRow } from "./detail-row/index";
import BmRow from "./bm-row"
import { FullPage } from "./style"
import Links from "./links"

export const Details = () => {
    const [weight, setWeight] = useState(60)
    const [height, setHeight] = useState(160)
    const [year, setYear] = useState(2000)
    const [gender, setGender] = useState("זכר")

    const calcBMI = () => {
        if (weight > 0 && height > 0) {
            const result = Math.round(weight / Math.pow(height, 2) * 10000)
            return result

        }
        else return ""
    }

    const calcBMR = () => {
        const age = new Date().getFullYear() - year;
        if (weight > 0 && height > 0 && age > 0) {
            if (gender === "זכר") {
                const bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
                return Math.round(bmr * 100) / 100

            } else {
                const bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
                return Math.round(bmr * 100) / 100
            }
        }
        else return "";
    }

    const calcMassPercentage = () => {
        const bmi = calcBMI()
        const age = new Date().getFullYear() - year;
        if (weight > 0 && height > 0 && age > 0) {
            let result = (1.39 * bmi) + (0.16 * age) - 9
            if (gender === "זכר") {
                result -= 10.34
            }
            return Math.round(result * 100) / 100
        } else return ""



    }
    return (
        <FullPage>
            <DetailRow title="משקל" unit={`ק"ג`} value={weight} changer={setWeight} />
            <DetailRow title="גובה" unit={`ס"מ`} value={height} changer={setHeight} />
            <DetailRow title="שנת לידה" value={year} changer={setYear} />
            <DetailRow title="מין" value={gender} changer={setGender} />
            <BmRow title="אחוז שומן" func={calcMassPercentage}></BmRow>
            <BmRow title="BMR" func={calcBMR}></BmRow>
            <BmRow title="BMI" func={calcBMI}></BmRow>
            <Links />
        </FullPage>
    );
};

export default Details;