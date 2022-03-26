import { createContext, useEffect, useState } from "react";
import SkeletonBase from "../components/baseComponents/SkeletonBase";
import { RegionData } from "../components/regions/interfaces";

export const RegionsContext = createContext<any>({})



const RegionsEndpoint = "https://disease.sh/v3/covid-19/continents"

const RegionsProvider = ({ children }: any) => {
    const [isRegionsLoading, setIsRegionsLoading] = useState<boolean>(false)
    const [regionsData, setRegionsData] = useState<RegionData[]>([])
    const [regionCountries, setRegionCountries] = useState<string[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<RegionData>();


    const handleSelect = (val: string) => {
        const selectedRegion = regionsData.find((region) => {
            return region.continent === val
        })

        if (selectedRegion) {
            setSelectedRegion(selectedRegion)
            setRegionCountries(selectedRegion.countries)
        }

    }

    const fetchRegionsData = async (): Promise<RegionData[]> => {
        const res = await fetch(RegionsEndpoint)
        const data = await res.json()
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
        <RegionsContext.Provider value={{ regionsData, handleSelect, regionCountries, selectedRegion }} >
            {
                isRegionsLoading ? <SkeletonBase /> : children
            }

        </RegionsContext.Provider>

    )

}
export default RegionsProvider