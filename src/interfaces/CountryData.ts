export interface Icalculated {
    "death_rate": number,
    "recovery_rate": number,
    "recovered_vs_death_ratio": number,
    "cases_per_million_population": number
}

export interface ITimelineData {

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


export interface ILatest_Data {

    "deaths": number,
    "confirmed": number,
    "recovered": number,
    "critical": number,
    calculated: Icalculated
}


export interface IData {

    "coordinates": object,
    "name": string,
    "code": string,
    "population": number,
    "updated_at": string,
    "today": object,
    "latest_data": ILatest_Data,
    "timeline"?: Array<ITimelineData>
}

export interface ICountrydata {
    data?: IData[]
}

export interface ICountryDetails {
    data: IData
}