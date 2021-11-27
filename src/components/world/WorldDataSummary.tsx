import { useContext } from "react"
import { WorldDataContext } from "../../contexts/worldCasesContext"
import { IWorldData } from "../../interfaces/worldData";

const WorldDataSummary = () => {
    const worldData: IWorldData = useContext(WorldDataContext)
    console.log("worldData", worldData);

    return (
        <> World Data  = {worldData.updated} </>

    )
}

export default WorldDataSummary