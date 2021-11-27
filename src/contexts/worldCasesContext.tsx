import { Children, createContext, useEffect, useState } from "react"
import { IWorldData } from "../interfaces/worldData";

export const WorldDataContext = createContext({});

const WorldDataContextProvider = (props: any) => {
    const [worldData, setWorldData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const WorldDataurl = "https://corona.lmao.ninja/v2/all"

    const fetchData = async (): Promise<IWorldData> => {
        const res = await fetch(WorldDataurl)
        const data = await res.json();
        console.log("DATA Fetched ::>>>>", data)
        setWorldData(data)
        return data
    }
    useEffect(() => {
        setIsLoading(true)
        fetchData()
        worldData.length > 0 ? setIsLoading(false) : setIsLoading(true)
    }, [])

    const { children } = props
    return (
        <WorldDataContext.Provider value={worldData}> {children} </WorldDataContext.Provider>
    )



}

export default WorldDataContextProvider