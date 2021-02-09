import { FC } from 'react'
import { Weather } from '../custom-env'

const CityWeather: FC<{ weather: Weather }> = ({ weather }) => {
  return (
    <div>
      <h1>{weather.city_name}</h1>
      <h1>{weather.temp}°C</h1>
      <h1>{weather.description} </h1>
    </div>
  )
}

export default CityWeather
