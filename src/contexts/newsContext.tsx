import { createContext, useEffect, useState } from "react"

import SkeletonBase from "../components/baseComponents/SkeletonBase";
import { HeadLines } from "../components/news/interfaces";
import mockHeadlines from "../mockdata/headlines.json"
import mockAllNews from "../mockdata/allNews.json"

export const NewsContext = createContext<any>({});


const NewsProvider = ({ children }: any) => {
    const [headLines, setHeadLines] = useState<any>();
    const [allNews, setAllnews] = useState<any>()
    const [isLoading, setIsLoading] = useState(false)

    const apiKey = "33e9ea497d434bdfaad27c6a1c34bd32"
    const headLinesEndpoint = "https://newsapi.org/v2/top-headlines"
    const allNewsEndpoint = "https://newsapi.org/v2/everything"

    const category = 'health';
    const q = "covid-19"


    const getHeadlines = async (): Promise<HeadLines> => {
        const res = await fetch(`${headLinesEndpoint}/?q=${q}`, {
            headers: {
                'X-Api-Key': apiKey,
            }
        })
        const data = await res.json()
        setHeadLines(data)
        return data
    }

    const getAllNews = async (): Promise<HeadLines> => {
        const res = await fetch(`${allNewsEndpoint}/?q=${q}`, {
            headers: {
                'X-Api-Key': apiKey,
            }
        })
        const data = await res.json()
        setAllnews(data)
        return data
    }


    useEffect(() => {
        getHeadlines();
        getAllNews();
    }, [])

    console.log('headLines :>> ', headLines);
    console.log('allNews', allNews)
    return (
        <>
            <NewsContext.Provider value={{ headLines, allNews }} >
                {isLoading ? <SkeletonBase /> : children}
            </NewsContext.Provider>
        </>

    )

}

export default NewsProvider;