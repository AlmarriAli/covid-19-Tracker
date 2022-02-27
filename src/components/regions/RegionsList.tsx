import React, { useContext } from 'react'
import { RegionsContext } from '../../contexts/RegionsContext'
import { RegionData } from './interfaces'
import RegionItem from './RegionItem'





function RegionsList() {
    const { regionsData } = useContext(RegionsContext)



    return (
        <>
            <div className="row">
                {
                    regionsData && regionsData.map((region: RegionData) => {
                        return <RegionItem region={region} />
                    })

                }
            </div>
        </>
    )
}

export default RegionsList