import React, { ReactElement, useContext } from 'react'
import { IWorldData } from "../../interfaces/worldData";
import { Grid } from "@mui/material";
import { WorldDataContext } from "../../contexts/worldCasesContext"



function WorldDataDetails(): ReactElement {
    const worldData: IWorldData = useContext(WorldDataContext)

    console.log('worldData', worldData)

    return (
        <>
            <Grid container justifyContent="center" direction="row" className="border bg-dark ">
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center"> Tests  </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }} > {worldData.tests}  </h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center">  Cases  </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.cases} </h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center"> Deaths  </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.deaths}  </h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center"> Recovered  </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.recovered}</h5>
                </Grid>

                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center"> Today Cases   </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.todayCases}</h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center">  Today Recovered   </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.todayRecovered}</h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center">  Today Deaths   </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.todayDeaths}</h5>
                </Grid>

                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center"> Active cases  </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.active}</h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center"> Critical  </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.critical}</h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center"> Updated  </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.updated}</h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center"> Population  </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.population}</h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center">  Affected Country  </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.affectedCountries}</h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center">  Active per Million   </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.activePerOneMillion}</h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center">  Cases per Million   </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.casesPerOneMillion}</h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center">  Critical per Million   </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.criticalPerOneMillion}</h5>
                </Grid>
                <Grid item md={3} sm={6} xs={6} className="border">
                    <h3 className="text-info text-center">  Recovered per Million   </h3>
                    <h5 style={{ color: "rgb(142, 93, 151" }}> {worldData.recoveredPerOneMillion}</h5>
                </Grid>
            </Grid>

        </>
    )
}

export default WorldDataDetails