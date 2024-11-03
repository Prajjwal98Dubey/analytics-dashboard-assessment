/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { parameterAnalysis } from "../analysis";
import {Chart,Legend,ArcElement,plugins} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
import { backgroundColors } from "../helper";


Chart.register(Legend,ArcElement,plugins)

const CountryComp = ({ data }) => {
    const options = {
        plugins:{
            legend:{
                display:false
            },
            title:{
                display:true,
                text:"Country wise Cars"
            }
        }
    }
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
        let returnedObj = parameterAnalysis(data,'County')
        let obj = {
            labels:Object.keys(returnedObj),
            datasets:[
                {
                    label:'Electric Cars',
                    data:Object.values(returnedObj),
                    backgroundColor:backgroundColors.slice(0,Object.keys(returnedObj).reverse().length),
                    borderWidth:1
                }
            ]
        }
        setCountry(obj)
        setIsLoading(false)
  },[data])
  return( 
        <div>
           <div className="flex justify-center">
            {isLoading ? <div className="flex justify-center">Loading...</div>:
                <div className="xsm:w-[240px] xsm:h-[240px] sm:w-[290px] sm:h-[290px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] bg-white rounded-md m-1 p-1 shadow-md shadow-white">
                    <Doughnut data={country} options={options}/>
                </div>
            }
           </div>
        </div>
  );
};

export default CountryComp;
