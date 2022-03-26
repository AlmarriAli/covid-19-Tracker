import React, { ReactElement } from 'react'
import { Article } from '../interfaces'


interface HeadlineTinyProps {
    article: Article

}


function HeadLineTiny({ article }: HeadlineTinyProps): ReactElement {
    return (
        <>

            <div className="d-flex flex-inline bd-highlight border bg-dark justify-content-start ">
                <div className=" d-flex  p-2 bd-highlight">
                    <a href={article.url} className="nav-link" style={{ color: "#8e5d97" }} target={"blank"} >
                        <img className="align-self-center" src={article.urlToImage} alt={article.author} style={{ width: 64, height: 64 }} />
                    </a>
                </div>
                <div className="d-flex p-2 align-items-sm-center">
                    <a href={article.url} className="nav-link" style={{ color: "#8e5d97" }} target={"blank"}>{article.title}</a>

                </div>
            </div>


        </>
    )
}

export default HeadLineTiny