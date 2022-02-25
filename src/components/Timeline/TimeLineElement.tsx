import React, { ReactElement } from 'react'
import { TimeLineElementElement } from './interfaces'
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
interface TimeLineElementElementProps {
    countryTimelineData: TimeLineElementElement

}



function TimeLineElement({ countryTimelineData }: TimeLineElementElementProps): ReactElement {
    return (
        <>
            <VerticalTimelineElement className="vertical-timeline-element--work" iconStyle={{ background: "rgb(33, 150, 243)" }}
                date={countryTimelineData.date} icon={<CoronavirusIcon />}    >
                <p className='bg-dark text-info' > {countryTimelineData.confirmed} </p>

            </VerticalTimelineElement>

        </>
    )
}

export default TimeLineElement