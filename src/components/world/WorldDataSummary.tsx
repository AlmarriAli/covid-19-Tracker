import { Grid } from "@mui/material";
import { useContext } from "react"
import { WorldDataContext } from "../../contexts/worldCasesContext"
import { IWorldData } from "../../interfaces/worldData";

const WorldDataSummary = () => {
    const worldData: IWorldData = useContext(WorldDataContext)
    console.log("worldData", worldData);

    return (
        <>
            <Grid>
                <Grid item xs={8} bg-dark>
                    {worldData.updated}
                </Grid>

            </Grid>

        </>

    )
}

export default WorldDataSummary