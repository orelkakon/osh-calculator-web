import React from 'react';
import { FullPage, Table, TR, TD } from "./style"
import { useSelector } from 'react-redux';
import { getAmounts, getPercentage } from "./../../utils/index"
import PieChartCPF from "./../pie-chart-today-values"

const CaloriesTableModal = ({ closeModal }) => {
    const myDayList = useSelector(state => state);
    const amounts = getAmounts(myDayList)
    const percentage = getPercentage(amounts)
    return (
        <FullPage>
            <Table>
                <TR>
                    <TD color="green">פחמימות</TD>
                    <TD color="black">{percentage[0]}%</TD>
                    <TD color="black">{amounts[0]} ג'</TD>
                </TR>
                <TR>
                    <TD color="blue">חלבונים</TD>
                    <TD color="black">{percentage[1]}%</TD>
                    <TD color="black">{amounts[1]} ג'</TD>
                </TR>
                <TR>
                    <TD color="red">שומנים</TD>
                    <TD color="black">{percentage[2]}%</TD>
                    <TD color="black">{amounts[2]} ג'</TD>
                </TR>
                <TR>
                    <TD color="black">סך קלוריות מהמזון</TD>
                    <TD color=""></TD>
                    <TD color="black">{amounts[3]} קל'</TD>
                </TR>
            </Table>
            <PieChartCPF percentage={percentage}/>
        </FullPage>
    );
};

export default CaloriesTableModal;