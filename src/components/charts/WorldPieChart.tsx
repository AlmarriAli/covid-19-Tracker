import { useContext } from "react"
import { WorldDataContext } from "../../contexts/worldCasesContext"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { IWorldData } from "../../interfaces/worldData";

ChartJS.register(ArcElement, Tooltip, Legend);

const WorldPieChart = () => {
    const worldData: IWorldData = useContext(WorldDataContext)
    const mapLabels = ["cases", "deaths", "recovered", "active"];
    const mapData = [worldData.cases, worldData.deaths, worldData.recovered, worldData.active]

    const data = {
        labels: mapLabels,
        datasets: [
            {
                label: ' World Cases',
                data: mapData,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                ],
                borderWidth: 1
            }
        ]


    }
    const mapConfig = {
        type: 'doughnut',
        data: data,
    };

    return (

        <Doughnut data={data} >  </Doughnut>



    )

}

export default WorldPieChart