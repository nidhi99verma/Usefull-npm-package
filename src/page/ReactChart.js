import React from 'react';
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DoughnutChart from './components/DoughnutChart'

export default function ReactChart() {

    return (
        <div>
            <LineChart />
            <BarChart />
            <DoughnutChart />
        </div>
    )
}
