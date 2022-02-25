
import { createContext, useEffect, useState } from "react";

import SkeletonBase from "../components/baseComponents/SkeletonBase";

export const CountryDetailscontext = createContext<any>({});

const BaseAPIUrl = "https://corona-api.com/countries";




const CountryDetailsProvider = ({ children }: any) => {

    const fetchCountryData = async (code: string) => {
        const res = await fetch(`${BaseAPIUrl}/${code}`);
        const data = await res.json();
        setCountrydetails(data)
        return data
    }

    const [countryDetails, setCountrydetails] = useState({})
    const [isCountryDetailsLoading, setIsCountryDetailsLoading] = useState(false)
    useEffect(() => {
        setIsCountryDetailsLoading(true)
        setTimeout(() => {
            fetchCountryData("au")
            countryDetails ? setIsCountryDetailsLoading(false) : setIsCountryDetailsLoading(true)
        }, 1000)
    }, [])

    return (
        <CountryDetailscontext.Provider value={{ countryDetails, fetchCountryData }}>
            {isCountryDetailsLoading ? <SkeletonBase /> : children}
        </CountryDetailscontext.Provider>

    )

}
export default CountryDetailsProvider


