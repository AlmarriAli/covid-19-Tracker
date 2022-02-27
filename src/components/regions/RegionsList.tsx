import { Grid } from '@mui/material'
import { useContext, useState } from 'react'
import { RegionsContext } from '../../contexts/RegionsContext'
import { RegionData } from './interfaces'
import RegionItem from './RegionItem'





function RegionsList() {
    const { regionsData } = useContext(RegionsContext)


    return (
        <>
            <h3 className="text-warning bg-dark text-center p-2"> Select a Region to Show Data </h3>
            <Grid container justifyContent="center" direction="row">
                {
                    regionsData && regionsData.map((region: RegionData) => {
                        return <RegionItem region={region} />
                    })

                }
            </Grid>
        </>
    )
}

export default RegionsList