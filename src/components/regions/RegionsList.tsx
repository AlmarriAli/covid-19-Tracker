import { Grid } from '@mui/material'
import { useContext, useState } from 'react'
import { RegionsContext } from '../../contexts/RegionsContext'
import { RegionData } from './interfaces'
import RegionItem from './RegionItem'





function RegionsList() {
    const { regionsData } = useContext(RegionsContext)


    return (
        <>
            <h3 className="text-info text-center"> Select a Region to show data   </h3>
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