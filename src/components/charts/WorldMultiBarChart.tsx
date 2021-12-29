import { ReactElement, useContext } from "react"
import { WorldDataContext } from "../../contexts/worldCasesContext"
import { IWorldData } from "../../interfaces/worldData"
// import faker from 'faker';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';

import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const labels = ["total", "today", "active", "Recovered"]

const datasets = [
    {
        type: 'line' as const,
        label: 'Cases',
        borderColor: 'rgb(13 202 240)',
        borderWidth: 2,
        fill: false,
        data: [5000, 2000, 4000, 3000],
    },
    {
        type: 'line' as const,
        label: 'Deaths',
        borderColor: 'rgb(205 114 221)',
        borderWidth: 2,
        fill: false,
        data: [100, 200, 3000, 5000],
    }

]

const data = {
    labels, datasets
}

const WorldMultiBarChart = (): ReactElement => {
    const worldData: IWorldData = useContext(WorldDataContext)
    return (

        <><Chart type='bar' data={data} /> </>
    )

}

export default WorldMultiBarChart