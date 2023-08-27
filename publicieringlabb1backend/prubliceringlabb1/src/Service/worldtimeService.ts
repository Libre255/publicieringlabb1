export interface Iworldtimes {
    country:string;
    time:string;
}
const worldtimeService = async ():Promise<Iworldtimes[]> =>{
    const res = await fetch("http://localhost:8080/worldtime");
    const worldtime = await res.json();
    return worldtime;
}

export default worldtimeService