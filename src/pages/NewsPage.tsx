import { ReactElement, useContext } from "react"
import HeadLinesList from "../components/news/headlines/HeadLinesList"
import { NewsContext } from "../contexts/newsContext"


const NewsPage = (): ReactElement => {





    return (
        <>
            <div className="alert"><h3 className="text-info text-center">
                <h3 className="text-info text-center"> Covid News  </h3>
                <HeadLinesList isTiny={false} />
            </h3> </div>
        </>
    )


}

export default NewsPage