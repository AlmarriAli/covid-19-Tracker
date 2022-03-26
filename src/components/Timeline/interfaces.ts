export interface TimeLineElement {
    daily?: number,
    total?: number
    totalPerHundred?: number,
    dailyPerMillion?: number
    date?: string,

}


export interface TimeLineData {
    data: TimeLineElement[]
}

export interface ChronoItem {
    title: string,
    cardTitle?: string,
    url?: string,
    cardSubtitle?: string,
    cardDetailedText?: string,
}
