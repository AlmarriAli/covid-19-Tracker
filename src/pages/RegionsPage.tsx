import { Grid } from "@mui/material"
import { useState, useContext } from "react";
import RegionCountriesList from "../components/regions/RegionCountriesList";

import RegionsList from "../components/regions/RegionsList"
import { RegionsContext } from "../contexts/RegionsContext";

const RegionsPage = () => {


    return (
        <>
            <Grid container justifyContent="center" direction="row">
                <Grid item md={3} sm={12} xs={12} className="" >

                    <RegionsList />
                </Grid>

                <Grid item md={9} sm={12} xs={12} >
                    <RegionCountriesList />
                </Grid>
            </Grid>
        </>
    )

}
export default RegionsPage