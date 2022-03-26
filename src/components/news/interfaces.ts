export interface Source {
    id: string;
    name: string
}

export interface Article {
    author: string;
    content: string;
    description?: string;
    publishedAt?: string;
    source?: Source;
    title: string;
    url: string;
    urlToImage?: string
}

export interface HeadLines {
    status: string;
    totalResults: number;
    articles: Article[]
}