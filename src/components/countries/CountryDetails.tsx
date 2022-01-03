import { ReactElement, useState, useEffect } from "react";
import { Grid } from "@mui/material";


import { useParams } from 'react-router-dom';

import CountrySummaryBarChart from '../charts/CountrySummaryBarChart'
import { IBarChartdatasets } from "../../interfaces/ChartData";

import SkeletonBase from "../baseComponents/SkeletonBase";

const CountryDetails = (): ReactElement => {
    const { code } = useParams();

    const [countryDetails, setCountrydetails] = useState<any>({})
    const [mapTimeline, setMapTimeline] = useState([]);
    const [isloading, setIsloading] = useState<boolean>(false)

    const BaseAPIUrl = "https://corona-api.com/countries";

    const fetchCountryData = async (code: string) => {
        const res = await fetch(`${BaseAPIUrl}/${code}`);
        const data = await res.json();
        setCountrydetails(data);
        setMapTimeline(data.data.timeline.slice(0, 5))

        return data
    }

    const labels = mapTimeline.map((obj: any) => obj.date);
    const active = mapTimeline.map((obj: any) => obj.active);
    const confirmed = mapTimeline.map((obj: any) => obj.confirmed)
    const recovered = mapTimeline.map((obj: any) => obj.recovered)
    const deaths = mapTimeline.map((obj: any) => obj.deaths)

    useEffect(() => {
        setIsloading(true)
        fetchCountryData(code!)
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
    return (
        <>
            {isloading ? <SkeletonBase /> :
                <> <h2 className="text-primary text-center">{countryDetails.data?.name} </h2>
                    <Grid container justifyContent="center" direction="row">
                        <Grid item md={3} sm={12} xs={12} className="border  ">
                            <Grid container justifyContent="center" direction="row">
                                <Grid item md={12} sm={12} xs={12} className="border bg-dark text-warning ">
                                    <span>last Update at : {new Date(countryDetails.data?.updated_at).toLocaleString()
                                    } </span>

                                </Grid>
                                <Grid item md={10} sm={12} xs={12} className="  text-warning ">
                                    <h3 className="text-primary"> TimeLine Data</h3>

                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={9} sm={12} xs={12} >
                            <Grid container justifyContent="center" direction="row" className="border bg-dark ">
                                <Grid item md={3} sm={6} xs={6} className="border">
                                    <h3 className="text-info text-center"> Population  </h3>
                                    <h5 className="text-secondary"> {countryDetails.data?.population} </h5>
                                </Grid>
                                <Grid item md={3} sm={6} xs={6} className="border">
                                    <h3 className="text-info text-center">  Cases  </h3>
                                    <h5 className="text-secondary"> {countryDetails.data?.latest_data.confirmed} </h5>
                                </Grid>
                                <Grid item md={3} sm={6} xs={6} className="border">
                                    <h3 className="text-info text-center"> Deaths  </h3>
                                    <h5 className="text-secondary">  {countryDetails.data?.latest_data.deaths} </h5>
                                </Grid>
                                <Grid item md={3} sm={6} xs={6} className="border">
                                    <h3 className="text-info text-center"> Recovered  </h3>
                                    <h5 className="text-secondary"> {countryDetails.data?.latest_data.recovered} </h5>
                                </Grid>

                            </Grid>
                            <Grid container justifyContent="center" direction="row" className="border ">
                                <Grid item md={4} sm={6} xs={6} className="border">
                                    <CountrySummaryBarChart labels={labels} datasets={dataSets} ></CountrySummaryBarChart>
                                </Grid>
                                <Grid item md={4} sm={6} xs={6} className="border">
                                    <CountrySummaryBarChart labels={labels} datasets={dataSets} ></CountrySummaryBarChart>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>




                </>}
        </>

    )


}
export default CountryDetails