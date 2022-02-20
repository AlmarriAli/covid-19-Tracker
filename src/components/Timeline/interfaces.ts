export interface TimeLineElementElement {

    "updated_at": string,
    "date": string,
    "deaths": number,
    "confirmed": number,
    "recovered": number,
    "new_confirmed": number,
    "new_recovered": number,
    "new_deaths": number,
    "active": number
}



export interface TimeLineData {
    data: TimeLineElementElement[]
}