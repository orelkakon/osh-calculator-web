import React from 'react';
import { FullPage } from "./style"
import { PieChart } from 'react-minimal-pie-chart';

const PieChartCPF = ({ percentage }) => {
    return (
        <FullPage>
            <PieChart
                data={[
                    { title: 'פחמימות', value: percentage[0], color: 'green' },
                    { title: 'חלבונים', value: percentage[1], color: 'blue' },
                    { title: 'שומן', value: percentage[2], color: 'red' },
                ]}
                label={({ dataEntry }) => dataEntry.value + '%'}
            />
        </FullPage>
    );
};

export default PieChartCPF;