import { ReactElement } from "react"
import HeadLinesList from "../components/news/headlines/HeadLinesList"



const NewsPage = (): ReactElement => {





    return (
        <>
            <div className="alert">
                <h3 className="text-info text-center mb-2" data-testid="test-news-title" > Covid News  </h3>
                <HeadLinesList isTiny={false} />
            </div>
        </>
    )


}

export default NewsPage