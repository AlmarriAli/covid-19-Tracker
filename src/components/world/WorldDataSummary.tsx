import { Grid, Box } from "@mui/material";
import { useContext } from "react"
import { WorldDataContext } from "../../contexts/worldCasesContext"
import { IWorldData } from "../../interfaces/worldData";



const WorldDataSummary = () => {
    const worldData: IWorldData = useContext(WorldDataContext)
    console.log("worldData", worldData);

    return (
        <>

            <Grid container className="bg-dark text-primary" >
                <Grid item md={12} sm={12} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Total Cases </h3>
                        <Box sx={{ color: 'info.main' }}>  {worldData.cases}</Box>
                    </Box>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Active  Cases</h3>
                        <Box sx={{ color: 'info.main' }}>   {worldData.active}
                        </Box>
                    </Box>

                </Grid>
                <Grid md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Today Cases</h3>
                        <Box sx={{ color: 'info.main' }}>   {worldData.todayCases}
                        </Box>
                    </Box>

                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Total Recovered </h3>
                        <Box sx={{ color: 'info.main' }}>   {worldData.recovered}
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Today Recovered</h3>
                        <Box sx={{ color: 'info.main' }}>  {worldData.todayRecovered}
                        </Box>
                    </Box>

                </Grid>


                <Grid md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Today  Recovered </h3>
                        <Box sx={{ color: 'info.main' }}>   {worldData.todayRecovered}
                        </Box>
                    </Box>

                </Grid>
                <Grid md={12} sm={12} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Total  Deaths </h3>
                        <Box sx={{ color: 'info.main' }}>   {worldData.deaths}
                        </Box>
                    </Box>

                </Grid>
                <Grid md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3> Today  Deaths </h3>
                        <Box sx={{ color: 'info.main' }}>   {worldData.todayDeaths}
                        </Box>
                    </Box>

                </Grid>
            </Grid>


        </>

    )
}

export default WorldDataSummary