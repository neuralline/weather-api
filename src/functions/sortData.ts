export const sortForecast = (forecast: any) => {
  const newForecast = forecast.data.map((res: any) => {
    return {
      datetime: '2021-02-09',
      temp: res.temp,
      description: res.weather.description,
      wind_spd: res.wind_spd,
      error: false
    }
  })
  return { city_name: forecast.city_name, forecast: newForecast }
}
