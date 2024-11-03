/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { topMakersOfCars } from "../analysis";

const MakeComp = ({ data }) => {
  const [make, setMake] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setMake(topMakersOfCars(data));
    setIsLoading(false);
  }, [data]);
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center ">Loading...</div>
      ) : (
        <div>
            <p className="text-2xl text-center">Top 3 <span className="text-green-600">Electric</span> Car Companies...</p>
        <div className="flex justify-center flex-wrap">
          {make.map((item, index) => (
            <div key={index} className="m-1 p-1">
            <div className="xsm:w-[150px] xsm:h-[70px] sm:w-[210px] sm:h-[80px] md:w-[280px] md:h-[90px] lg:w-[300px] lg:h-[100px] rounded-md bg-white flex justify-center items-center text-2xl font-semibold hover:border border-green-400 cursor-pointer shadow-md shadow-white">{item}</div>
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default MakeComp;
