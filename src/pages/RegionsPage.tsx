import { Grid } from "@mui/material"
import RegionCountriesList from "../components/regions/RegionCountriesList";
import RegionsList from "../components/regions/RegionsList"


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