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


interface CountrySummaryBarChartProps {
    labels: Array<string>,
    datasets: Array<IBarChartdatasets>

}

const CountrySummaryBarChart = (props: CountrySummaryBarChartProps) => {
    const { labels, datasets } = props
    return (
        <>
            <Bar data={{ labels, datasets }} options={options}  >  </Bar>
        </>
    )
}
export default CountrySummaryBarChart