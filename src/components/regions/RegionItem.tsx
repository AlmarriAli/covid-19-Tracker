import React from 'react'
import { RegionData } from './interfaces'

interface RegionitemProps {
    region: RegionData

}

function RegionItem({ region }: RegionitemProps) {
    return (
        <div className="col-md-6 border mt-3 bg-dark">
            <div className="row text-white">
                <div> <h2 className=' text-info text-center'> {region.continent}</h2> </div>
                <div className="col-md-4 bg-dark ">
                    <h3 className='text-info text-center '>  Active</h3>
                    <span style={{ color: '#8e5d97' }}> {region.active}</span>
                </div>
                <div className="col-md-4 bg-dark ">
                    <h3 className='text-info text-center '> Cases </h3>
                    <span style={{ color: '#8e5d97' }}> {region.cases}</span>
                </div>
                <div className="col-md-4 bg-dark ">
                    <h3 className='text-info text-center '> Deaths </h3>
                    <span style={{ color: '#8e5d97' }}>  {region.deaths} </span>
                </div>
            </div>
        </div>
    )
}

export default RegionItem