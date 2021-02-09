import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Weather } from '../custom-env'

const CityForecast: FC<{ weather: Weather }> = ({ weather }) => {
  return (
    <div>
      <Link to={`/forecast/${weather.city_name}`}>
        <h1>{weather.city_name}</h1>
      </Link>
      <h1>{weather.temp}°C</h1>
      <h1>{weather.description} </h1>
    </div>
  )
}

export default CityForecast
