import { Grid, Box } from "@mui/material";
import { useContext } from "react"
import { WorldDataContext } from "../../contexts/worldCasesContext"
import { IWorldData } from "../../interfaces/worldData";



const WorldDataSummary = () => {
    const worldData: IWorldData = useContext(WorldDataContext)
    console.log("worldData", worldData);

    return (
        <>

            <Grid container className="bg-dark " >
                <Grid item md={12} sm={12} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3 className="text-info" > Total Cases </h3>
                        <Box sx={{ color: "rgb(142, 93, 151)" }}>  {worldData.cases}</Box>
                    </Box>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3 className="text-info" > Active  Cases</h3>
                        <Box sx={{ color: 'rgb(142, 93, 151)' }}>   {worldData.active}
                        </Box>
                    </Box>

                </Grid>
                <Grid md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3 className="text-info" > Today Cases</h3>
                        <Box sx={{ color: 'rgb(142, 93, 151)' }}>   {worldData.todayCases}
                        </Box>
                    </Box>

                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3 className="text-info"> Total Recovered </h3>
                        <Box sx={{ color: 'rgb(142, 93, 151)' }}>   {worldData.recovered}
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3 className="text-info"> Today Recovered</h3>
                        <Box sx={{ color: 'rgb(142, 93, 151)' }}>  {worldData.todayRecovered}
                        </Box>
                    </Box>

                </Grid>


                <Grid md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3 className="text-info"> Today  Recovered </h3>
                        <Box sx={{ color: 'rgb(142, 93, 151)' }}>   {worldData.todayRecovered}
                        </Box>
                    </Box>

                </Grid>
                <Grid md={12} sm={12} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3 className="text-info"> Total  Deaths </h3>
                        <Box sx={{ color: 'rgb(142, 93, 151)' }}>   {worldData.deaths}
                        </Box>
                    </Box>

                </Grid>
                <Grid md={12} sm={6} xs={12}>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        <h3 className="text-info"> Today  Deaths </h3>
                        <Box sx={{ color: 'rgb(142, 93, 151)' }}>   {worldData.todayDeaths}
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </>

    )
}

export default WorldDataSummary