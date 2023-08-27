import { useEffect, useState } from "react"
import weatherService, { Iweather } from "../Service/weatherService"

const useWeather = ()=>{
    const [weatherList, setweatherList] = useState<Iweather[]>([])

    useEffect(() => {
      const fetchWeather = async ()=>{
          
        try {
            const weatherData = await weatherService();
            if(!weatherData) throw new Error("Couldnt fetch weatherService");
            setweatherList(weatherData);
        } catch (error) {
            console.log(error);
        }
      }
    fetchWeather();
    }, [])
    
    return {weatherList}
}

export default useWeather;