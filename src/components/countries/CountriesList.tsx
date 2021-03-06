import { ReactElement, useContext, useState } from "react"
import { CountriesContext } from "../../contexts/countriesContext"
import { ICountrydata } from "../../interfaces/CountryData"
import CountrySummary from "./CountrySummary"
import { Grid } from "@mui/material";
import SearchcountriesForm from "../forms/SearchCountriesForm";


const CountriesList = (): ReactElement => {
    const countriesData: ICountrydata = useContext(CountriesContext)
    const [countriesListData, setCountriesListData] = useState(countriesData.data)

    const handleSearch = (val: any): void => {
        const searchResult = countriesData.data?.filter((country) => {
            console.log(`val`, val)
            return country.name.toLowerCase().includes(val);

        })

        setCountriesListData(searchResult)

    }

    return (
        <> <h3 className="text-center text-info" data-testid="coutriesList-title">Countries List</h3>
            <Grid container justifyContent="center" direction="row" m={2}>
                <Grid item md={8} sm={12} xs={12} className="border">
                    <SearchcountriesForm handleSearch={handleSearch} />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" direction="row">

                {!countriesListData ? "...Getting Data" :

                    countriesListData.map(country => <CountrySummary key={country.code} country={country} data-testid={`test-country-card${country.name}`} />)
                }


            </Grid>

        </>
    )

}

export default CountriesList