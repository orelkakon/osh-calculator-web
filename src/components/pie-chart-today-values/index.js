import React from 'react';
import { FullPage } from "./style"
import { PieChart } from 'react-minimal-pie-chart';

const PieChartCPF = ({ percentage, height, width, margin}) => {
    return (
        <FullPage height={height} width={width} margin={margin}>
            <PieChart
                data={[
                    { title: 'פחמימות', value: Math.round(percentage[0]), color: 'green' },
                    { title: 'חלבונים', value: Math.round(percentage[1]), color: 'blue' },
                    { title: 'שומן', value: Math.round(percentage[2]), color: 'red' },
                ]}
                label={({ dataEntry }) => dataEntry.value + '%'}
            />
        </FullPage>
    );
};

export default PieChartCPF;