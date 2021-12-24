import { ReactElement, useContext } from "react"
import { CountriesContext } from "../../contexts/countriesContext"
import { ICountrydata } from "../../interfaces/CountryData"
import CountrySummary from "./CountrySummary"
import { Grid } from "@mui/material";


const CountriesList = (): ReactElement => {
    const countriesData: ICountrydata = useContext(CountriesContext)

    return (
        <> <h3>Countries List</h3>
            <Grid container justifyContent="center" direction="row">

                {!countriesData["data"] ? "...Getting Data" :

                    countriesData.data.map(country => <CountrySummary />)
                }
            </Grid>
        </>
    )

}

export default CountriesList