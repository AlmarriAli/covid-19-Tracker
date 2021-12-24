import WorldDataSummary from "../components/world/WorldDataSummary"
import { Grid } from "@mui/material";
import MapWorldComponent from "../components/maps/MapWorld";
import WorldPieChart from "../components/charts/WorldPieChart";
import WorldMultiBarChart from "../components/charts/WorldMultiBarChart";
const HomePage = () => {
    return (<>
        <h2> Home page</h2>
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
                        <WorldMultiBarChart />
                        <WorldMultiBarChart />
                        <WorldMultiBarChart />
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    </>


    )


}

export default HomePage