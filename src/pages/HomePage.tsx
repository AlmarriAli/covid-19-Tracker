

import { Grid } from "@mui/material";
import MapWorldComponent from "../components/maps/MapWorld";
import HeadLinesList from "../components/news/headlines/HeadLinesList";
import WorldDataDetails from "../components/world/WorldDataDetails";
const HomePage = () => {
    return (<>
        <Grid container justifyContent="center" direction="row">
            <div className="mt-3 h-100 d-inline-block">
                <h2 className="text-info text-center">  World Data summary </h2>
            </div>

            <Grid container justifyContent="center" direction="row">
                <WorldDataDetails></WorldDataDetails>
            </Grid>

        </Grid>
        <Grid container justifyContent="center" direction="row" className="overflow-auto"  >
            <Grid item md={7} sm={12} xs={12} className="border">
                <MapWorldComponent></MapWorldComponent>
            </Grid>
            <Grid item md={5} sm={12} xs={12} className="border  ">
                <HeadLinesList isTiny={true} />
            </Grid>
        </Grid>






    </>


    )


}

export default HomePage