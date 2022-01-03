import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Chart } from 'react-chartjs-2';
import { IBarChartdatasets } from '../../interfaces/ChartData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ["total", "today", "active", "Recovered"]
const mapData = [1000, 2000, 5000, 4000]
const datasets = [

    {
        label: ' World Cases',
        data: mapData,
        backgroundColor: [
            'rgb(228 173 237)',
            'rgb(255, 99, 132)',
            'rgb(13 202 240)',

        ],
        borderWidth: 1
    }

]

const data = {
    labels, datasets
}


interface CountrySummaryBarChartProps {
    labels: Array<string>,
    datasets: Array<IBarChartdatasets>

}

const CountrySummaryBarChart = (props: CountrySummaryBarChartProps) => {
    const { labels, datasets } = props
    return (
        <>
            <Bar data={{ labels, datasets }} options={options} >  </Bar>
        </>
    )
}
export default CountrySummaryBarChart