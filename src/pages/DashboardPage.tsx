import WorldDataSummary from "../components/world/WorldDataSummary"
import { Grid } from "@mui/material";
import MapWorldComponent from "../components/maps/MapWorld";
import WorldPieChart from "../components/charts/WorldPieChart";
import WorldMultiBarChart from "../components/charts/WorldMultiBarChart";
import ChronoList from "../components/Timeline/ChronoList";
import { ChronoItem, TimeLineElement } from "../components/Timeline/interfaces";
import { useEffect, useState } from "react";
import SkeletonBase from "../components/baseComponents/SkeletonBase";

const vaccineCoverageUrl = "https://disease.sh/v3/covid-19/vaccine/coverage"


const DashboardPage = () => {
    const [timelineData, setTimeLineData] = useState([])
    const [isloading, setIsloading] = useState<boolean>(false)

    const fetchVaccineData = async () => {
        const res = await fetch(`${vaccineCoverageUrl}?lastdays=30&fullData=true`)
        const data = await res.json();

        setTimeLineData(data)
    }

    const mapApiDataToChronoData = () => {
        let dataItems: ChronoItem[] = [];
        timelineData?.map((item: TimeLineElement) => {
            const obj = { title: item.date, cardTitle: `World Vaccine Doses on ${item.date}`, cardDetailedText: `Daily : ${item.daily}  |||  Total: ${item.total}` }
            dataItems.push(obj as ChronoItem)
            return obj
        })
        return dataItems
    }
    // data for timeline
    const ChronoData = mapApiDataToChronoData()

    useEffect(() => {
        setIsloading(true)
        fetchVaccineData()
        mapApiDataToChronoData()
        setTimeout(() => {
            timelineData ? setIsloading(false) : setIsloading(true)
        }, 1000)

    }, [])

    return (<>
        <h2 className="text-info text-center" dat-testid="test-dashboard-title"> Dashboard page</h2>
        <Grid container justifyContent="center" direction="row">
            <Grid item md={3} sm={12} xs={12} className="border">
                <WorldDataSummary></WorldDataSummary>
            </Grid>
            <Grid item md={9} sm={12} xs={12} className="border">
                <Grid container justifyContent="center" direction="row">
                    <Grid item md={6} sm={12} xs={12} className="border">
                        <MapWorldComponent></MapWorldComponent>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className="border">
                        <WorldPieChart></WorldPieChart>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className="border">
                        <Grid md={12} style={{ minHeight: 100 }}>
                            <WorldMultiBarChart period={7} />
                        </Grid>
                        <Grid md={12} style={{ minHeight: 100 }}>
                            <WorldMultiBarChart period={15} />
                        </Grid>
                        <Grid md={12} style={{ minHeight: 100 }}>
                            <WorldMultiBarChart period={21} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" direction="row" >
                    {
                        isloading ? <SkeletonBase /> :
                            <ChronoList timeLineData={ChronoData} mode="HORIZONTAL" />
                    }
                </Grid>
            </Grid>
        </Grid>

    </>


    )


}

export default DashboardPage