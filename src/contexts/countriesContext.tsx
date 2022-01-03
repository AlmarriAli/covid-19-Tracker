import { createContext, useEffect, useState } from "react"
import SkeletonBase from "../components/baseComponents/SkeletonBase";
import { ICountrydata } from "../interfaces/CountryData";



export const CountriesContext = createContext({});

const ApiUrl = "https://corona-api.com/countries"

const CountriesContextProvider = (props: any) => {
    const [countriesData, setCountriesData] = useState<ICountrydata>({} as ICountrydata)
    const [isCountriesDataLoading, setIsCountriesDataLoading] = useState(false)
    const { children } = props

    const fetchCountriesData = async (): Promise<ICountrydata> => {
        const res = await fetch(ApiUrl);
        const data = await res.json();
        setCountriesData(data);
        return data
    }
    useEffect(() => {
        setIsCountriesDataLoading(true)
        fetchCountriesData()
        setTimeout(() => {
            setIsCountriesDataLoading(false)
        }, 1000)

    }, [])

    return (

        <CountriesContext.Provider value={countriesData}>   {isCountriesDataLoading ? <SkeletonBase /> : children} </CountriesContext.Provider>

    )


}

export default CountriesContextProvider


