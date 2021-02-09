import { FC } from 'react'
import { Weather } from '../custom-env'

const TinyCast: FC<{ weather: Weather }> = ({ weather }) => {
  return (
    <div className="cast">
      <div>{weather.city_name}</div>
      <div>{weather.temp}°C</div>
      <div>{weather.description} </div>
      <div></div>
      <div>{weather.datetime} </div>
    </div>
  )
}

export default TinyCast
