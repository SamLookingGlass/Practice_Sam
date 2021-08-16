// Approach 1: Loading data from .csv file
const csvFilePath = 'datasets/country_vaccinations_by_manufacturer.csv'
const csv = require('csvtojson')

// Convert a csv file to json with csvtojson
async function loadData(csvFilePath) {
  let json =  await csv().fromFile(csvFilePath)
    return transformData(json);
}

// Transform json into series
function transformData(rawData) {
  // transform into x and y
  let series = [];
  for (let datnum of rawData) {
      series.push({
          'a': datnum.location,
          'x': datnum.date,
          'y': parseFloat(datnum.total_vaccinations),
          'z': datnum.vaccine,
      })
  }
  console.log(series);
  return series;
}

// window.addEventListener('DOMContentLoaded', async ()=>{
//   let series = await loadData(dataURL);
//   chart.updateSeries([{
//       'name': 'Crude Birth Rates',
//       'data': series
//   }])
// })

// Calling functions
loadData(csvFilePath)