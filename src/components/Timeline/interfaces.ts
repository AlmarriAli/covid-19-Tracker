export interface TimeLineElementElement {
    daily?: number,
    total?: number
    totalPerHundred?: number,
    dailyPerMillion?: number
    date?: string,

}


export interface TimeLineData {
    data: TimeLineElementElement[]
}

export interface ChronoItem {
    title: string,
    cardTitle?: string,
    url?: string,
    cardSubtitle?: string,
    cardDetailedText?: string,
}
