/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { parameterAnalysis } from "../analysis";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement,Legend,Title, plugins} from "chart.js";

Chart.register(ArcElement,Legend,Title,plugins)

const ElectricType = ({ data }) => {
  const [electricTypeData, setElectricTypeData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const options = {
    plugins:{
        legend:{
            position:"bottom"
        },
        title:{
            display:true,
            text:'Electric Vehicle Type'
        }
    }
  }
  useEffect(() => {
    let returnedObj = parameterAnalysis(data, "Electric Vehicle Type");
    let obj = {
      labels: Object.keys(returnedObj),
      datasets: [
        {
          label: "electric type vehicle",
          data: Object.values(returnedObj),
          backgroundColor: [
            "rgba(255, 99, 132, 0.9)",
            "rgba(54, 162, 235, 0.9)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    };
    setElectricTypeData(obj);
    setIsLoading(false);
  }, [data]);

  return (
    <div className="flex justify-center m-1 p-1">
    <div className="xsm:w-[240px] xsm:h-[240px] sm:w-[290px] sm:h-[290px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] bg-white rounded-md shadow-md shadow-white">
      {!isLoading && <Doughnut data={electricTypeData} options={options} />}
    </div>
    </div>
  );
};

export default ElectricType;
