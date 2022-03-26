import { ReactElement, useContext } from "react"
import { NewsContext } from "../../../contexts/newsContext"
import { Article } from "../interfaces"
import HeadLineItem from "./HeadLineItem"
import HeadLineTiny from "./HeadLineTiny"

interface HeadLinesListProps {
    isTiny: boolean
}

function HeadLinesList({ isTiny }: HeadLinesListProps): ReactElement {
    const { headLines } = useContext(NewsContext)
    if (!headLines.articles) {
        return (<> "...loading articles" </>)
    }
    if (isTiny) {
        return (
            <>  <div className="overflow-auto  d-inline-block" style={
                { maxHeight: 510 }
            } >
                <h4 className="text-center text-info "> Latest Covid News</h4>
                {
                    headLines.articles.slice(0, 10).map((article: Article) => {
                        return (
                            <HeadLineTiny article={article} />
                        )
                    })
                }
            </div>
            </>
        )
    }
    return (
        <>
            <div className="row">

                {
                    headLines.articles.map((article: Article) => {
                        return (

                            <HeadLineItem article={article} />

                        )
                    })
                }
            </div>

        </>
    )
}

export default HeadLinesList