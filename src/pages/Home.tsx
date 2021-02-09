import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CityForecast from '../components/Forecast'
import { StoreContext } from '../context/Provider'
import { State, Weather } from '../custom-env'
import { fetchWeatherData } from '../functions/featchWeather'
import { cities } from '../mock/cities'

const Home = () => {
  const { state, dispatch } = useContext<State | any>(StoreContext)
  const { id }: { id: string } = useParams()
  const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/current'

  const currentCity = state.weather.find(
    (city: Weather) => city.city_name === id
  )

  console.log('Home city', currentCity)
  useEffect(() => {
    if (!currentCity) {
      const { lat, lon } = cities[id]
      fetchWeatherData({ lon, lat, url }).then(response => {
        dispatch({
          type: 'ADD_CITY',
          city: response
        })
      })
    }
  }, [])

  return (
    <div>
      Home
      {currentCity ? (
        <CityForecast weather={currentCity} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Home
