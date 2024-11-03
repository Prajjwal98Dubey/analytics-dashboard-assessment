export const parameterAnalysis = (data, para) => {
  let paraMap = {};
  for (let i = 0; i < data.length; i++) {
    let currType = data[i][para];
    if (paraMap[currType]) {
      paraMap[currType] += 1;
    } else {
      paraMap[currType] = 1;
    }
  }
  return paraMap;
};

export const topCarModels = (data) => {
  let modelsObj = parameterAnalysis(data, "Model");
  let sortedModels = Object.keys(modelsObj)
    .sort((a, b) => modelsObj[b] - modelsObj[a])
    .slice(0, 11);
  let obj = {};
  for (let model of sortedModels) {
    obj[model] = modelsObj[model];
  }
  return obj;
};

export const averageElectricRange = (data) => {
  let averageRangeOfElectricVehicle = 0;
  let size = data.length;
  for (let vehicle of data) {
    averageRangeOfElectricVehicle += parseFloat(vehicle["Electric Range"]);
  }
  return (averageRangeOfElectricVehicle / size).toFixed(2);
};

export const topMakersOfCars = (data) => {
  let returnedObj = parameterAnalysis(data, "Make");
  let topMakers = Object.keys(returnedObj)
    .sort((a, b) => returnedObj[b] - returnedObj[a])
    .slice(0, 3);
  return topMakers;
};

export const makeDetails = (data) => {
  let makeArray = Object.keys(parameterAnalysis(data, "Make"));
  let makeModelDetails = {}; // complete details
  for (let make of makeArray) {
    for (let i = 0; i < data.length; i++) {
      if (data[i]["Make"] === make) {
        if (makeModelDetails[make]) {
          makeModelDetails[make].push(data[i]);
        } else {
          makeModelDetails[make] = [];
        }
      }
    }
  }
  return makeModelDetails;
};

export const makeToModel = (data, makeName) => {
  let makeModel = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i]["Make"] === makeName) {
      makeModel.push(data[i]["Model"]);
    }
  }
  return makeModel;
};

export const makeModelYear = (data,model,make)=>{
  let makeModel = {};
  for(let i=0;i<data.length;i++){
    if(data[i]['Make'] === make){
      if(makeModel[data[i]['Year']]){
        makeModel[data[i]['Year']]+=1
      }
      else{
        makeModel[data[i]['Year']] = 0;
      }
    }
  }
  return makeModel;
}