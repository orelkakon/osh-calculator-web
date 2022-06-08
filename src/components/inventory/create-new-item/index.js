import React, { useState } from 'react';
import { FullPage, SaveButton } from "./style"
import InputRow from "./input-row"
import CountType from "./counter-type-button"

const CreateNewItem = ({name}) => {
    const [itemName, setItemName] = useState(name)
    const [countType, setCountType] = useState("ערכים ל-100 גרם")
    const [type, setType] = useState("")
    const [weight, setWeight] = useState(0)
    const [calories, setCalories] = useState(0)
    const [proteins, setProteins] = useState(0)
    const [carbs, setCarbs] = useState(0)
    const [fats, setFats] = useState(0)

    const validationForm = () => {
        return itemName.length !== 0 && weight > 0 && calories > 0
    }
    const saveNewItem = () => {
        if(validationForm()){
            alert("success")
        } else {
            alert("failed")
        }
    }
    return (
        <FullPage>
            <InputRow setField={setItemName} title="שם הפריט*" itemName={itemName}/>
            <InputRow setField={setType} title="סוג המנה" placeholder="יחידה / כף / כוס / פרוסה..."/>
            <InputRow type="number" setField={setWeight} title="משקל המנה*" placeholder="גרם"/>
            <CountType countType={countType} setField={setCountType}/>
            <InputRow type="number" setField={setCalories} title="קלוריות*" placeholder="קלוריות"/>
            <InputRow type="number" setField={setProteins} title="חלבונים" placeholder="גרם"/>
            <InputRow type="number" setField={setCarbs} title="פחמימות" placeholder="גרם"/>
            <InputRow baseline={true} setField={setFats} title="שומנים" placeholder="גרם"/>
            <SaveButton onClick={saveNewItem}>שמור פריט </SaveButton>
        </FullPage>
    );
};

export default CreateNewItem; 