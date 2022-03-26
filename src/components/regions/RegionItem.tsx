import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import { RegionsContext } from '../../contexts/RegionsContext'
import { RegionData } from './interfaces'

interface RegionitemProps {
    region: RegionData

}

function RegionItem({ region }: RegionitemProps) {
    const { handleSelect } = useContext(RegionsContext)


    return (

        <Grid item md={12} sm={12} xs={12} className="border btn btn-lg bg-dark" onClick={() => handleSelect(region.continent)} >

            <div className="row text-white">
                <div> <h2 className=' text-info text-center'> {region.continent}</h2> </div>
                <div className="col-md-4 ">
                    <h3 className='text-info text-center '>  Active</h3>
                    <span style={{ color: '#8e5d97' }}> {region.active}</span>
                </div>
                <div className="col-md-4  ">
                    <h3 className='text-info text-center '> Cases </h3>
                    <span style={{ color: '#8e5d97' }}> {region.cases}</span>
                </div>
                <div className="col-md-4  ">
                    <h3 className='text-info text-center '> Deaths </h3>
                    <span style={{ color: '#8e5d97' }}>  {region.deaths} </span>
                </div>
            </div>

        </Grid >

    )
}

export default RegionItem