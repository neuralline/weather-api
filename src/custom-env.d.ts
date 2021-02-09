export type Fetch = ({ lat, lot, url }: Position) => Promise<Weather>

export interface Weather {
  city_name: string
  datetime: string
  temp: number
  description: string
  wind_spd: number
  lon: number
  lat: number
  error: boolean
  message?: string
}

export interface Context extends State {
  dispatch: Dispatch
}

export interface Dispatch {
  type: string
}

export interface Action {
  type: string
  city: any
}

export interface State {
  weather: Weather[]
  forecast: any
  city: string[]
}

export interface Position {
  lat: number
  lon: number
  url?: string
}
export interface Cities {
  [key: string]: Position
}

export interface Forecast {
  datetime: string
  temp: number
  description: string
  wind_spd: number
  error: boolean
}
