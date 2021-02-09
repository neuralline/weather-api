import { Weather } from '../custom-env'
import { initialData } from '../mock/weather'

export const sortWeatherData = (res: any): Weather => {
  return {
    ...initialData,
    city_name: res.city_name,
    datetime: res.datetime,
    temp: res.temp,
    description: res.weather.description,
    wind_spd: res.wind_spd,
    lon: res.lon,
    lat: res.lat,
    error: false
  }
}
