import React, { ReactElement } from 'react'
import { Article } from '../interfaces'

interface HeadlineItemProps {
    article: Article

}


function HeadLineItem({ article }: HeadlineItemProps): ReactElement {
    return (
        <div className='card col-md-3 mt-1 border bg-dark' >
            <img className="card-img-top" src={article.urlToImage} alt="" style={{ width: "100%", height: 180 }} />

            <small style={{ fontSize: "0.8rem", position: 'absolute', top: 0, marginLeft: 0 }} className='badge t-auto text-white bg-dark'> Source:  <small className='text-info bg-dark'>{article?.source?.name} </small> </small>


            <div className="card-body">

                <h5 className="card-title"> {article.title} </h5>
            </div>

            <div className="card-footer d-flex justify-content-between   align-items-center">
                <div className='p-2  '>
                    <small style={{ fontSize: "0.8rem" }} className=' text-white align-self-center'> Author: <small className='text-info'>{article.author} </small></small>

                </div>
                <a href={article.url} className='ml-auto btn btn-outline-info p-2 align-self-center ' target={"blank"} > Read article </a>
            </div>

        </div>
    )
}

export default HeadLineItem