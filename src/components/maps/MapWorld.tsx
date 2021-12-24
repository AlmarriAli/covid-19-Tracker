import { Grid } from "@mui/material"
import { ReactElement, useContext, useEffect, useState } from "react"
import { WorldMap } from "react-svg-worldmap"
import { CountriesContext } from "../../contexts/countriesContext"
import { ICountrydata } from "../../interfaces/CountryData";


const MapWorldComponent = (): ReactElement => {
    const countriesData: ICountrydata = useContext(CountriesContext)
    console.log("countriesData in maps component", countriesData)

    const [countriesMapData, setCountriesMapData] = useState([])
    console.log("countriesData in maps", countriesData)

    const prepareDataForCountriesMap = () => {
        const formattedData: any = [];
        if (countriesData.data) {
            countriesData.data!.map(C => {
                const obj = { country: C.code, value: C.latest_data.confirmed }
                return formattedData.push(obj)
            })
            setCountriesMapData(formattedData)
        }
    }

    useEffect(() => {

        prepareDataForCountriesMap()

    }, [])
    return (

        <>
            <Grid item md={12} sm={12} xs={12}>
                <WorldMap color="green" title="World map showing active cases" data={countriesMapData} />
            </Grid>

        </>
    )

}

export default MapWorldComponent