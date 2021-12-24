import { Grid, Box } from "@mui/material";
import { useContext } from "react"
import { WorldDataContext } from "../../contexts/worldCasesContext"
import { IWorldData } from "../../interfaces/worldData";



const WorldDataSummary = () => {
    const worldData: IWorldData = useContext(WorldDataContext)
    console.log("worldData", worldData);

    return (
        <>

            <Grid container >
                <Grid item md={12} sm={12} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Total Cases </h3>
                        {worldData.cases}
                    </Box>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Active  Cases</h3>
                        {worldData.active}
                    </Box>

                </Grid>
                <Grid md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Today Cases</h3>
                        {worldData.todayCases}
                    </Box>

                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Total Recovered </h3>
                        {worldData.recovered}
                    </Box>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Today Recovered</h3>
                        {worldData.todayRecovered}
                    </Box>

                </Grid>


                <Grid md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Today  Recovered </h3>
                        {worldData.todayRecovered}
                    </Box>

                </Grid>
                <Grid md={12} sm={12} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Total  Deaths </h3>
                        {worldData.deaths}
                    </Box>

                </Grid>
                <Grid md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Today  Deaths </h3>
                        {worldData.todayDeaths}
                    </Box>

                </Grid>
            </Grid>


        </>

    )
}

export default WorldDataSummary