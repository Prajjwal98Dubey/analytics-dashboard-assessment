/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { averageElectricRange } from "../analysis";

const ElectricRangeComp = ({data}) => {
    const[avg,setAvg] = useState(0)
    const[isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        setAvg(averageElectricRange(data));
        setIsLoading(false)
    },[data])
  return (
    <div>
        {isLoading ? <div>Loading...</div> :
            <div className="flex justify-center">
                Average Electric Range of Vehicle
                <div className="flex justify-center ml-1 font-extrabold">{avg}</div>
            </div>
        
        
        }
    </div>
  )
}

export default ElectricRangeComp
