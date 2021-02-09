import axios from 'axios'
import { Fetch } from '../custom-env'
import { initialData } from '../mock/weather'

export const fetchWeatherData: Fetch = async ({ lat, lon, url }) => {
  //@ts-ignore

  const options = {
    method: 'GET',
    url: url,
    //@ts-ignore
    params: { lat, lon },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  }
  try {
    let res: any = {}

    const response = await axios
      //@ts-ignore
      .request(options)
    res = response.data

    return {
      ...initialData,
      ...res
    }
  } catch (error) {
    console.error(error)
    return { ...initialData, error: true }
  }
}
