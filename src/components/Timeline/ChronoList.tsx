
import { ChronoItem } from './interfaces'
import { Chrono } from "react-chrono";
import { ReactElement } from 'react'
import { TimelineMode } from 'react-chrono/dist/models/TimelineModel';



interface TimeLineListProps {
    timeLineData: ChronoItem[];
    mode: TimelineMode
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

const ChronoList = ({ timeLineData, mode }: TimeLineListProps): ReactElement => {

    return (

        <Chrono items={timeLineData} mode={mode} slideShow slideItemDuration={1000} theme={theme} cardPositionHorizontal={"TOP"} allowDynamicUpdate />


    )

}

export default ChronoList