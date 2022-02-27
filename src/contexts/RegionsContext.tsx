import { createContext, useEffect, useState } from "react";
import SkeletonBase from "../components/baseComponents/SkeletonBase";
import { RegionData } from "../components/regions/interfaces";

export const RegionsContext = createContext<any>({})



const RegionsEndpoint = "https://disease.sh/v3/covid-19/continents"

const RegionsProvider = ({ children }: any) => {
    const [isRegionsLoading, setIsRegionsLoading] = useState<boolean>(false)
    const [regionsData, setRegionsData] = useState<RegionData[]>([])

    const fetchRegionsData = async (): Promise<RegionData[]> => {
        const res = await fetch(RegionsEndpoint)
        const data = await res.json()
        console.log('data', data)
        setRegionsData(data);
        return data
    }

    useEffect(() => {
        setIsRegionsLoading(true)
        setTimeout(() => {
            fetchRegionsData()
            setIsRegionsLoading(false)
        }, 1000)
    }, [])


    return (
        <RegionsContext.Provider value={{ regionsData }} >
            {
                isRegionsLoading ? <SkeletonBase /> : children
            }

        </RegionsContext.Provider>

    )

}
export default RegionsProvider