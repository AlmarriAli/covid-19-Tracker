
// import useSWR from "swr";
// import { ICountryDetails } from "../interfaces/CountryData";


// const apiUrl = "https://corona-api.com/countries/";

// const useCountryDetails = (countryCode: string) => {


//     const fetchCountryData = async () => {
//         const res = await fetch(`${apiUrl}/${countryCode}`);
//         const data = await res.json();
//         console.log(`data in fetch :>>.`, data)
//         return data
//     }

//     const { data, error } = useSWR(apiUrl, fetchCountryData)
//     console.log(`data from useSWR::>>.`, data)
//     const timeline = data.data.timeline
//     console.log(`timeline  from useSWR ::>>>`, timeline)
//     return [data, error, timeline]
// }

// export default useCountryDetails  