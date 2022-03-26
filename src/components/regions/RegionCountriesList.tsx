import { Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { CountriesContext } from '../../contexts/countriesContext'
import { RegionsContext } from '../../contexts/RegionsContext'
import { ICountrydata, IData } from '../../interfaces/CountryData'
import CountrySummary from '../countries/CountrySummary'
import SearchcountriesForm from '../forms/SearchCountriesForm'

const RegionCountriesList = () => {
    const { regionCountries, selectedRegion } = useContext(RegionsContext)
    const countriesData: ICountrydata = useContext(CountriesContext)
    const [allCountriesData, setAllCountriesData] = useState(countriesData.data)
    const [regionCountriesList, setRegionCountriesList] = useState<IData[]>([])



    //compare two arrays to return matches only
    const GetRegionCountriesData = () => {
        const matches = allCountriesData?.filter((country => {
            return regionCountries.indexOf(country.name) !== -1
        }))
        setRegionCountriesList(matches!)
    }

    const handleSearch = (val: any): void => {
        const searchResult = allCountriesData?.filter((country) => {
            return country.name.toLowerCase().includes(val);
        })
        setRegionCountriesList(searchResult!)
    }

    useEffect(() => {
        GetRegionCountriesData()
    }, [regionCountries])

    if (regionCountriesList?.length <= 0) {
        return (
            <h3 className='text-info text-center mt-3' data-testid="title-region-countries-list"> Please select a region to show data  </h3 >
        )
    }

    return (
        <>
            <Grid container justifyContent="center" direction="row" m={2}>
                <h3 className="text-info text-center" data-testid="title-region-countries-list"> Countries in {selectedRegion?.continent}</h3>

            </Grid>
            <Grid container justifyContent="center" direction="row" m={2}>
                <Grid item md={8} sm={12} xs={12} className="border">
                    <SearchcountriesForm handleSearch={handleSearch} />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" direction="row">

                {regionCountriesList?.map((country: IData) => <CountrySummary key={country.code} country={country} />)}
            </Grid>
        </>
    )
}

export default RegionCountriesList