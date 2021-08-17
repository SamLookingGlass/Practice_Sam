// Approach 1: Loading data from .csv file
const csvFilePath = 'datasets/country_vaccinations_by_manufacturer.csv'
const csv = require('csvtojson')

// Convert a csv file to json with csvtojson
async function loadData() {
  let json =  await csv().fromFile(csvFilePath)
    return transformData(json);
}

// Transform json into time series
function transformData(rawData) {
  // transform into x and y
  let series = [];
  for (let datnum of rawData) {
      series.push({
          'country': datnum.location,
          'date': datnum.date,
          'year': new Date(datnum.date).getFullYear(),
          'month': new Date(datnum.date).getMonth(),
          'total_vac': parseFloat(datnum.total_vaccinations),
          'vaccine': datnum.vaccine,
      })
  }
  // console.log(series);
  return series;
}

// loadData()
var data = loadData();
console.log(data);