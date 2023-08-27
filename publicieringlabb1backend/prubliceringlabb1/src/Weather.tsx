import React from 'react'
import useWeather from './API/useWeather'

const Weather :React.FC = () => {
  const {weatherList} = useWeather();
  return(
    <div>
       {weatherList.map(weatherdata => <h1> {weatherdata.date} : {weatherdata.temperatureC}, {weatherdata.temperatureF}</h1>)}
    </div>
  )
}

export default Weather 