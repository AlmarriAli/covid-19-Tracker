import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Typography, CircularProgress, Button } from '@mui/material';
import useCountryDetails from '../../customhooks/useConuntryDetails';
import { IData } from '../../interfaces/CountryData';
import { Bar, Line } from 'react-chartjs-2';
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
    const [isloadindChart, setIsLoadingChart] = useState(false)

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
                backgroundColor: 'rgb(62 191 137 / 78%)',
            },

        ],
    };


    return (
        <Card sx={{ maxWidth: 345 }}>

            {isloadindChart ? <CircularProgress color="inherit" /> : <Bar options={chartOptions} data={data} > </Bar>}

            <CardContent>
                <Typography gutterBottom variant="h5" component="div"   >
                    <p className="bg-dark" style={{ color: "rgb(220 53 53)" }} >   {country.name}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View country deatils </Button>
            </CardActions>
        </Card >
    );
}
export default CountrySummary; 