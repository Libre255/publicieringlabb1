import React from 'react'
import { useWorldTimes } from './API/useWorldTime'

const WorldTimes :React.FC = () => {
 const {worldtimeslist} = useWorldTimes();
  return(
    <div>
     {worldtimeslist.map((worldtimesdata, index )=> <h1 key={index}>{worldtimesdata.country} : {worldtimesdata.time}</h1>)}
    </div>
  )
}

export default WorldTimes 