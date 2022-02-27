import { ReactElement, useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Doughnut } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import CountrySummaryBarChart from '../charts/CountrySummaryBarChart'
import { IBarChartdatasets } from "../../interfaces/ChartData";
import SkeletonBase from "../baseComponents/SkeletonBase";

import ChronoList from "../Timeline/ChronoList";
import { ChronoItem, TimeLineElement } from "../Timeline/interfaces";

const CountryDetails = (): ReactElement => {
    const { code } = useParams();

    const [countryDetails, setCountrydetails] = useState<any>({})
    const [mapData, setMapData] = useState([]);
    const [timelineData, setTimeLineData] = useState([]);
    const [isloading, setIsloading] = useState<boolean>(false)



    const BaseAPIUrl = "https://corona-api.com/countries";
    const vaccineCoverageUrl = "https://disease.sh/v3/covid-19/vaccine/coverage/countries"


    const fetchCountryData = async (code: string) => {
        const res = await fetch(`${BaseAPIUrl}/${code}`);
        const data = await res.json();
        setCountrydetails(data);
        setMapData(data.data.timeline.slice(0, 5));

        return data
    }
    const fetchVaccineData = async (code: string) => {
        const res = await fetch(`${vaccineCoverageUrl}/${code}?lastdays=30&fullData=true`)
        const data = await res.json();
        setTimeLineData(data?.timeline)
    }
    console.log('timeLineData', timelineData)

    const mapApiDataToChronoData = () => {
        let dataItems: ChronoItem[] = [];
        timelineData?.map((item: TimeLineElement) => {
            const obj = { title: item.date, cardTitle: " Vaccine Doses", cardDetailedText: `Daily : ${item.daily}  |||  Total: ${item.total}` }
            dataItems.push(obj as ChronoItem)
            return obj
        })
        return dataItems
    }

    // data for timeline
    const ChronoData = mapApiDataToChronoData()

    // Data for charts 
    const labels = mapData.map((obj: any) => obj.date);
    const active = mapData.map((obj: any) => obj.active);
    const confirmed = mapData.map((obj: any) => obj.confirmed)
    const recovered = mapData.map((obj: any) => obj.recovered)
    const deaths = mapData.map((obj: any) => obj.deaths)

    const newConfirmed = mapData.map((obj: any) => obj.new_confirmed);
    const newRecovered = mapData.map((obj: any) => obj.new_recovered)
    const newDeaths = mapData.map((obj: any) => obj.new_deaths)
    useEffect(() => {
        setIsloading(true)
        fetchCountryData(code!)
        fetchVaccineData(code!.toLocaleLowerCase())
        setTimeout(() => {
            countryDetails ? setIsloading(false) : setIsloading(true)
        }, 1500)

    }, [])


    const dataSets: IBarChartdatasets[] = [
        {
            label: 'active',
            data: active,
            backgroundColor: 'rgba(255, 99, 132,0.5)',
        },
        {
            label: 'confirmed',
            data: confirmed,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'deaths',
            data: deaths,
            backgroundColor: ' rgb(142 93 151)',
        },
        {
            label: 'recovered',
            data: recovered,
            backgroundColor: 'rgb(62 191 137 / 48%)',
        },

    ]

    const newCasesdataSets: IBarChartdatasets[] = [

        {
            label: 'new_confirmed',
            data: newConfirmed,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'new_deaths',
            data: newDeaths,
            backgroundColor: ' rgb(142 93 151)',
        },
        {
            label: 'new_recovered',
            data: newRecovered,
            backgroundColor: 'rgb(62 191 137 / 48%)',
        },

    ]
    const doughnutDatasets = [
        {
            label: 'Cases',
            data: [countryDetails.data?.latest_data?.deaths, countryDetails.data?.latest_data?.confirmed, countryDetails.data?.latest_data?.recovered],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgb(142, 93, 151, 0.5)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1,
        },
    ]

    const data = {
        labels: ['Deaths', 'Confiremed', 'Recovered'],
        datasets: doughnutDatasets
    };




    return (
        <>
            {isloading ? <SkeletonBase /> :
                <> <h2 className="text-primary text-center">{countryDetails.data?.name} </h2>
                    <Grid container justifyContent="center" direction="row">
                        <Grid container justifyContent="center" direction="row" className="border bg-dark ">
                            <Grid item md={3} sm={6} xs={6} className="border">
                                <h3 className="text-info text-center"> Population  </h3>
                                <h5 style={{ color: "rgb(142, 93, 151" }} > {countryDetails.data?.population} </h5>
                            </Grid>
                            <Grid item md={3} sm={6} xs={6} className="border">
                                <h3 className="text-info text-center">  Cases  </h3>
                                <h5 style={{ color: "rgb(142, 93, 151" }}> {countryDetails.data?.latest_data?.confirmed} </h5>
                            </Grid>
                            <Grid item md={3} sm={6} xs={6} className="border">
                                <h3 className="text-info text-center"> Deaths  </h3>
                                <h5 style={{ color: "rgb(142, 93, 151" }}>  {countryDetails.data?.latest_data?.deaths} </h5>
                            </Grid>
                            <Grid item md={3} sm={6} xs={6} className="border">
                                <h3 className="text-info text-center"> Recovered  </h3>
                                <h5 style={{ color: "rgb(142, 93, 151" }}> {countryDetails.data?.latest_data?.recovered} </h5>
                            </Grid>

                        </Grid>

                        <Grid container justifyContent="center" direction="row" className="border bg-dark ">
                            <Grid item md={3} sm={6} xs={6} className="border">
                                <h3 className="text-info text-center"> Cases per million   </h3>
                                <h5 style={{ color: "rgb(142, 93, 151" }}> {countryDetails.data?.latest_data?.calculated.cases_per_million_population} </h5>
                            </Grid>

                            <Grid item md={3} sm={6} xs={6} className="border">
                                <h3 className="text-info text-center"> Deaths Rate </h3>
                                <h5 style={{ color: "rgb(142, 93, 151" }}>  {countryDetails.data?.latest_data?.calculated.death_rate?.toFixed(2)} </h5>
                            </Grid>
                            <Grid item md={3} sm={6} xs={6} className="border">
                                <h3 className="text-info text-center"> Recovery Rate  </h3>
                                <h5 style={{ color: "rgb(142, 93, 151" }}> {countryDetails.data?.latest_data?.calculated.recovery_rate?.toFixed(2)} </h5>
                            </Grid>
                            <Grid item md={3} sm={6} xs={6} className="border">
                                <h3 className="text-info text-center">   Recovered_to death ratio </h3>
                                <h5 style={{ color: "rgb(142, 93, 151" }}> {countryDetails.data?.latest_data?.calculated?.recovered_vs_death_ratio ?? 0} </h5>
                            </Grid>

                        </Grid>
                        <Grid item md={8} sm={12} xs={12} >

                            {/* Second Grid summary  */}

                            <Grid container justifyContent="center" direction="row" >
                                <Grid item md={12} sm={6} xs={12} className="border" >
                                    <Doughnut data={data} style={{ maxHeight: 335 }} ></Doughnut>

                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center" direction="row" className="border ">
                                <Grid item md={6} sm={6} xs={6} className="border">
                                    <CountrySummaryBarChart labels={labels} datasets={dataSets} chartTitle={`Last 5 days chart for ${countryDetails.data?.name}`} ></CountrySummaryBarChart>

                                </Grid>
                                <Grid item md={6} sm={6} xs={6} className="border" >
                                    <CountrySummaryBarChart labels={labels} datasets={newCasesdataSets} chartTitle={`Recent cases in  ${countryDetails.data?.name}`}  ></CountrySummaryBarChart>
                                </Grid>

                            </Grid>

                        </Grid>
                        <Grid item md={3} sm={12} xs={12} className="border  ">
                            <Grid container justifyContent="center" direction="row">
                                <Grid item md={12} sm={12} xs={12} className="border bg-dark text-secondary ">
                                    <span>last Update at : {new Date(countryDetails.data?.updated_at).toLocaleString()
                                    } </span>
                                </Grid>
                                <Grid item md={12} style={{ maxHeight: 650, direction: 'rtl' }} sm={12} xs={12} className=" text-warning">
                                    <h4 className="text-info text-center">  Vaccination Data</h4>
                                    <ChronoList timeLineData={ChronoData} mode="VERTICAL" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </>}
        </>

    )


}
export default CountryDetails