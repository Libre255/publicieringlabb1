
export interface Iweather {
    date: string;
    temperatureC:number;
    temperatureF: number;
    summary:string;
}

const weatherService = async ():Promise<Iweather[]> => {

    const res = await fetch("http://localhost:8080/weatherforecast");
    const weatherData = await res.json();
    return weatherData;
}

export default weatherService;