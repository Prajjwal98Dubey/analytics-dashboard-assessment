/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { topCarModels } from "../analysis";
import { backgroundColors } from "../helper";
import {
  Chart,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  plugins,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(Legend, Title, CategoryScale, LinearScale, BarElement, plugins);
const Models = ({ data }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const [models, setModels] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let returnedObj = topCarModels(data, "Model");
    let obj = {
      labels: Object.keys(returnedObj),
      datasets: [
        {
          data: Object.values(returnedObj),
          backgroundColor: backgroundColors.slice(
            0,
            Object.keys(returnedObj).length
          ),
        },
      ],
    };
    setModels(obj);
    setIsLoading(false);
  }, [data]);
  return (
    <div className="flex justify-center">
      <div>
      <div>
        {isLoading ? (
          <div className="flex justify-center">Loading...</div>
        ) : (
          <div className="xsm:w-[240px] xsm:h-[240px] sm:w-full sm:h-[400px] md:w-[650px] md:h-[460px] lg:w-[970px] lg:h-[550px] bg-white m-2 p-4 rounded-md shadow-md shadow-white">
            <h1 className="flex justify-center">Top 10 Popular Car Models</h1>
            <Bar data={models} options={options} />
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Models;
