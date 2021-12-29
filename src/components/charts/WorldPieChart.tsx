import { useContext } from "react"
import { WorldDataContext } from "../../contexts/worldCasesContext"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { IWorldData } from "../../interfaces/worldData";

ChartJS.register(ArcElement, Tooltip, Legend);

const WorldPieChart = () => {
    const worldData: IWorldData = useContext(WorldDataContext)
    const mapLabels = ["cases", "deaths", "recovered"];
    const mapData = [worldData.cases, worldData.deaths, worldData.recovered]

    const data = {
        labels: mapLabels,
        datasets: [
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