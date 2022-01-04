import { FamilyRestroomOutlined } from '@mui/icons-material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';

import { IBarChartdatasets, ILineChartdatasets } from '../../interfaces/ChartData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


interface CountrySummaryBarChartProps {
    labels: Array<string>,
    datasets: Array<IBarChartdatasets> | Array<ILineChartdatasets> | any,
    chartTitle: string
}

const CountrySummaryBarChart = (props: CountrySummaryBarChartProps) => {
    const [isLineChart, setIsLineChart] = useState(false)
    const { labels, datasets, chartTitle } = props
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: chartTitle,
            },
        },
    };

    return (
        <>
            {isLineChart && <Line data={{ labels, datasets }} options={options}  >  </Line>}
            {!isLineChart && <Bar data={{ labels, datasets }} options={options}  >  </Bar>}
            <button className="btn btn-outline-info mt-4" onClick={() => setIsLineChart(!isLineChart)}> Convert to {isLineChart ? " bar chart" : " line chart"}</button>
        </>
    )
}
export default CountrySummaryBarChart