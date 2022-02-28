import { Grid } from "@mui/material"
import { ReactElement, useContext, useEffect, useState } from "react"
import { WorldMap } from "react-svg-worldmap"
import { CountriesContext } from "../../contexts/countriesContext"
import { ICountrydata } from "../../interfaces/CountryData";


const MapWorldComponent = (): ReactElement => {
    const countriesData: ICountrydata = useContext(CountriesContext)


    const [countriesMapData, setCountriesMapData] = useState([])


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
                <h4>Hove over map to show active cases </h4>
                <WorldMap color="rgb(142 93 151)" data={countriesMapData} />
            </Grid>

        </>
    )

}

export default MapWorldComponent