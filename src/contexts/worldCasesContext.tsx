import { Children, createContext, useEffect, useState } from "react"
import SkeletonBase from "../components/baseComponents/SkeletonBase";
import { IWorldData } from "../interfaces/worldData";

export const WorldDataContext = createContext({});

const WorldDataContextProvider = (props: any) => {
    const [worldData, setWorldData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const WorldDataurl = "https://corona.lmao.ninja/v2/all"

    const fetchData = async (): Promise<IWorldData> => {
        const res = await fetch(WorldDataurl)
        const data = await res.json();
        setWorldData(data)
        return data
    }
    useEffect(() => {
        setIsLoading(true)
        fetchData()
        setTimeout(() => {
            worldData ? setIsLoading(false) : setIsLoading(true)

        }, 1000)

    }, [])


    const { children } = props
    return (
        <WorldDataContext.Provider value={worldData}>
            {isLoading ? <SkeletonBase /> : children}

        </WorldDataContext.Provider>
    )



}

export default WorldDataContextProvider