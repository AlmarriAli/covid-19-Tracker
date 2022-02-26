
import { ChronoItem, TimeLineElementElement } from './interfaces'
import { Chrono } from "react-chrono";
import { ReactElement } from 'react'

interface TimeLineListProps {
    timeLineData: ChronoItem[]
}
interface Theme {
    cardBgColor?: string;
    cardForeColor?: string;
    primary?: string;
    secondary?: string;
    textColor?: string;
    titleColor?: string;
}
const theme: Theme = {
    // cardBgColor: "black",
    cardForeColor: "#c3abc9",
    primary: "#c3abc9",
    secondary: "#9fddc4",
    textColor: "#0dcaf0",
    titleColor: "#97cdf3"
}

const ChronoList = ({ timeLineData }: TimeLineListProps): ReactElement => {

    return (

        <Chrono items={timeLineData} mode="VERTICAL" slideShow slideItemDuration={1000} theme={theme} cardPositionHorizontal={"TOP"} allowDynamicUpdate />


    )

}

export default ChronoList