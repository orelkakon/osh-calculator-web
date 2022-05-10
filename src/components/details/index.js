import React,{useState} from 'react';
import { DetailRow } from "./detail-row/index";
import { FullPage } from "./style"

export const Details = () => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [year, setYear] = useState(0)
    const [gender, setGender] = useState("זכר")
    return (
        <FullPage>
            <DetailRow title="משקל" unit={`ק"ג`} value={weight} changer={setWeight}/>
            <DetailRow title="גובה" unit={`ס"מ`} value={height} changer={setHeight}/>
            <DetailRow title="גיל" value={year} changer={setYear}/>
            <DetailRow title="מין" value={gender} changer={setGender}/>
        </FullPage>
    );
};

export default Details;