import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TinyCast from '../components/TinyCast'
import { StoreContext } from '../context/Provider'
import { Weather } from '../custom-env'
import { fetchWeatherData } from '../functions/featchWeather'
import { cities } from '../mock/cities'
const SingleEvent = () => {
  const { state, dispatch }: any = useContext(StoreContext)
  const { id }: { id: string } = useParams()
  const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily'

  //const item: IEvent = items.find((item: IEvent) => item.id === id)

  const forecast = state.forecast.find((city: any) => city.city_name === id)
  console.log(id)
  console.log('cities[id]', cities[id])
  if (!forecast) {
    const { lat, lon } = cities[id]
    console.log('not found')
    /*    fetchWeatherData({ lon, lat, url }).then(response => {
      dispatch({
        type: 'ADD_FORECAST',
        city: response
      })
    }) */
  }
  console.log('forecast', forecast)
  useEffect(() => {
    const { lat, lon } = cities[id]
    fetchWeatherData({ lon, lat, url }).then(response => {
      dispatch({
        type: 'ADD_FORECAST',
        city: response
      })
    })
  }, [])

  return (
    <div className="cast-container">
      <h2>single</h2>
      {forecast &&
        forecast.forecast.map((cast: Weather) => <TinyCast weather={cast} />)}
    </div>
  )
}

export default SingleEvent
