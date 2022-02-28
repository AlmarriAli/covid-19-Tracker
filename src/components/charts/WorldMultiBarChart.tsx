import { ReactElement, useEffect, useState } from "react"


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
import { IWorldData } from "../../interfaces/worldData";
import Spinner from "../baseComponents/Spinner";
import { Grid } from "@mui/material";

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);


const WorldHistoricalDataUrl = "https://disease.sh/v3/covid-19/historical/all"

interface WorldMultiBarChartProps {
    period: number
}

const WorldMultiBarChart = ({ period }: WorldMultiBarChartProps): ReactElement => {

    const [chartData, setChartData] = useState<any>()
    const [isloadingChart, setisLoadingChart] = useState<Boolean>(false)

    const fetchHistoricalData = async (period: number): Promise<IWorldData> => {
        const res = await fetch(`${WorldHistoricalDataUrl}?lastdays=${period}`)
        const data = await res.json();
        setChartData(data)
        return data
    }

    useEffect(() => {
        setisLoadingChart(true)
        setTimeout(() => {
            fetchHistoricalData(period)
            console.log('chartData :>> ', chartData);
            setisLoadingChart(false)
        }, 1200)


    }, [])

    let cases: any = []
    let labels: any = []
    let dates: any = []
    let deaths: any = []
    let recovered: any = []

    if (chartData) {
        dates = Object.keys(chartData?.cases)
        labels = Object.keys(chartData?.cases)
        cases = Object.values(chartData?.cases)
        deaths = Object.values(chartData?.deaths)
        recovered = Object.values(chartData?.recovered)
    }


    const datasets = [
        {
            type: 'bar' as const,
            label: 'Cases',
            borderColor: 'rgb(228, 173 ,237)',
            borderWidth: 2,
            fill: false,
            data: cases,
        },
        {
            type: 'bar' as const,
            label: 'Deaths',
            borderColor: 'rgb(255 ,99, 132)',
            borderWidth: 2,
            fill: false,
            data: deaths,
        },
        {
            type: 'bar' as const,
            label: 'Recovered',
            borderColor: 'rgb(13, 202, 240)',
            borderWidth: 2,
            fill: false,
            data: recovered,
        }

    ]

    const data = {
        labels, datasets
    }



    if (isloadingChart) {
        return <Spinner />
    }

    return (
        <>
            <Grid className="text-info bg-dark text-center">
                <span className="text-info bg-dark text-center">  last {period} days  </span>
            </Grid>
            <Chart type='bar' data={data} />
        </>
    )

}

export default WorldMultiBarChart