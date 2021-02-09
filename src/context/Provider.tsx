import React, { createContext, useEffect, useReducer } from 'react'
import { Action, State } from '../custom-env'
import { sortForecast } from '../functions/sortData'
import { sortWeatherData } from '../functions/sortWeatherData'

const initialState: State = {
  weather: [],
  city: ['London', 'New York', 'Mumbai', 'Sydney', 'Tokyo'],
  forecast: []
}

const storeReducers = (state: State, action: Action) => {
  if (action.type === 'ADD_CITY') {
    try {
      const res = sortWeatherData(action.city.data[0])
      const newState: State = {
        ...state,
        weather: [...state.weather, { ...res }]
      }

      return newState
    } catch (err) {
      return state
    }
  } else if (action.type === 'ADD_FORECAST') {
    try {
      const res = sortForecast(action.city)

      const newState = { ...state, forecast: [...state.forecast, res] }

      return newState
    } catch (err) {
      return state
    }
  } else {
    return state
  }
}

const StoreContext = createContext({})
const StoreProvider: React.FC = props => {
  const [state, dispatch] = useReducer(storeReducers, initialState)

  useEffect(() => {}, [])
  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch
      }}
      {...props}
    />
  )
}

export { StoreProvider, StoreContext }
