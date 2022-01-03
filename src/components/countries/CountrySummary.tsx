import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


import { Typography, CircularProgress } from '@mui/material';

import { IData } from '../../interfaces/CountryData';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, PointElement,
    LineElement,
} from 'chart.js';
import { Link } from 'react-router-dom';


interface CountrySummaryProps {
    country: IData
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement, PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



const CountrySummary = (props: CountrySummaryProps) => {
    const { country } = props;
    const { latest_data: latestData } = country;
    const [isloadindChart] = useState(false)

    const labels = ["Deaths"];
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: country.name,
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Deaths',
                data: [latestData.deaths],
                backgroundColor: 'rgba(255, 99, 132,0.5)',
            },
            {
                label: 'Cases',
                data: [latestData.confirmed],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Recovered',
                data: [latestData.recovered ? latestData.recovered : 0],
                backgroundColor: 'rgb(212 140 225)',
            },

        ],
    };


    return (
        <Card sx={{ minWidth: 345, m: 2, boxShadow: 3 }} className="bg-light text-info"  >

            {isloadindChart ? <CircularProgress color="inherit" /> : <Bar options={chartOptions} data={data} > </Bar>}

            <CardContent>
                <Typography gutterBottom variant="h5" component="div"   >
                    <p className="bg-dark" style={{ color: "rgb(187 52 211)" }} >   {country.name}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Link className='btn btn-outline-dark' to={`/countries/${country.code}`} >View country deatils </Link>
                </Typography>
                <CardActions></CardActions>
            </CardContent>
        </Card >
    );
}
export default CountrySummary; 