import React, { ReactElement, useEffect, useState } from 'react'
import {
    VerticalTimeline
} from "react-vertical-timeline-component";
import SkeletonBase from '../baseComponents/SkeletonBase';
import TimeLineElement from './TimeLineElement';
import { TimeLineData, TimeLineElementElement } from './interfaces'

interface TimeLineListProps {
    timeLineData: TimeLineElementElement[]
}

function TimeLineList({ timeLineData }: TimeLineListProps): ReactElement {
    const [isTimeLineLoading, setIsTimeLineLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!timeLineData) {
            setIsTimeLineLoading(true)
        }

    }, [])

    return (
        <>
            {
                isTimeLineLoading ? <SkeletonBase /> :

                    <VerticalTimeline>
                        {timeLineData.map((CountryTimelineData: TimeLineElementElement) => {
                            return <TimeLineElement countryTimelineData={CountryTimelineData} />
                        })}

                    </VerticalTimeline>
            }
        </>
    )
}

export default TimeLineList