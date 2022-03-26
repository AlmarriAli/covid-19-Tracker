import React, { ReactElement, useContext } from 'react'
import { NewsContext } from "../../../contexts/newsContext"


function AllNewsList(): ReactElement {

    const { allNews } = useContext(NewsContext)

    return (
        <div>AllNewsList</div>
    )
}

export default AllNewsList