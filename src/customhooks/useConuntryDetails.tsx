import { useEffect, useState } from "react";


const apiUrl = "https://corona-api.com/countries/";

const useCountryDetails = (countryCode: string) => {
    const [countryDetails, setCountrydetails] = useState();

    const fetchCountryData = async () => {
        const res = await fetch(`${apiUrl}/${countryCode}`);
        const data = await res.json();
        setCountrydetails(data)
    }

    useEffect(() => {
        fetchCountryData()
    }, [countryCode])
    console.log(`countryDetails::>>>`, countryDetails)
    return [countryDetails, setCountrydetails]
}

export default useCountryDetails