import { useEffect, useState } from "react";
import "./App.css";
// import { parameterAnalysis } from "./analysis";
import ElectricType from "./components/ElectricType";
import Models from "./components/Models";
import CountryComp from "./components/CountryComp";
import MakeComp from "./components/MakeComp";


function App() {
  const [text, setText] = useState([]);
  useEffect(() => {
    const load = () => {
      fetch("./Electric_Vehicle_Population_Data.csv")
        .then((response) => response.text())
        .then((responseText) => {
          const jsonData = csvToJson(responseText);
          setText([...jsonData]);
        });
      const csvToJson = (csvText) => {
        const lines = csvText.trim().split("\n");
        const headers = lines[0].split(",");

        return lines.slice(1).map((line) => {
          const values = line.split(",");
          return headers.reduce((obj, header, index) => {
            obj[header] = values[index];
            return obj;
          }, {});
        });
      };
    };
    load();
  }, []);
  return (
    <div className="font-bona">
      <div className="flex justify-center font-bold xsm:text-xl sm:text-xl md:text:xl lg:2xl sticky top-0 bg-white h-[40px] items-center"><span className="text-green-600 mr-[3px]">Electric</span><span> Vehicle Analysis</span></div>
      <div className="bg-gray-200">
        <div className="flex flex-wrap justify-center m-2">
          <ElectricType data={text}/>
          <CountryComp data={text}/>
        </div>
        <Models data={text}/>
        <MakeComp data={text}/>
      </div>
    </div>
  );
}

export default App;
