import { useEffect, useState } from "react";
import worldtimeService, { Iworldtimes } from "../Service/worldtimeService"

const useWorldTimes = ()=>{
    const [worldtimeslist, setworldtimeslist] = useState<Iworldtimes[]>([]);
    const [error, seterror] = useState<Error | unknown>()

    useEffect(() => {
      const fetchworldTimes = async() => {
        try{
            const worldtimesdata = await worldtimeService();
            if(!worldtimesdata) throw new Error("couldn't fetch worldtimeService");
            setworldtimeslist(worldtimesdata)
        }catch(error){
            seterror(error)
        }
      }
      fetchworldTimes();
    }, [])
    return {worldtimeslist, error}    
}

export {useWorldTimes}