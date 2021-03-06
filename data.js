// Approach 1: Loading data from .csv file
const csvFilePath = 'datasets/country_vaccinations_by_manufacturer.csv'
const csv = require('csvtojson')

// Convert a csv file to json with csvtojson
async function loadData() {
  let json =  await csv().fromFile(csvFilePath)
    return transformData(json);
}

// Transform json into series
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


// Function to list of values with specified key
async function getValues(value) {
  var myvalue = value;
  var data = await loadData();
  var list_x = data.map(function(element) {
    return element[myvalue]
  })
  // console.log(data)
  // console.log(list_x); 
  return list_x
}


// (async() => {
//   var response_x =  await getValues('country'); // This is async.
//   console.log(response_x);
// })();

// window.addEventListener(
//   'DOMContentLoaded', async ()=>{
//     async() => {
//       var response_x =  await getValues('country'); 
//       var response_y = await getValues('total_map');
//       console.log(response_x,response_y);
//       chart3.updateSeries([{
//       'name': 'Crude Birth Rates',
//       'data': response_x
//       }])
//     }
//   }
// )

// Mapping out certain keys
async function test() {
  let json =  await csv().fromFile(csvFilePath)
  let arrayX = json.map(function(json) {
    return {
      location: json.location,
      date: new Date(json.date)
    }
  })
  console.log(arrayX)
}

// test()

// Filter conditions
async function test1() {
  let json =  await csv().fromFile(csvFilePath)
  let arrayX = json.map(function(json) {
    return {
      location: json.location,
      date: new Date(json.date),
      year: new Date(json.date).getFullYear(),
      month: new Date(json.date).getMonth() + 1,
      day: new Date(json.date).getDay()
    }
  })
  let filtered = arrayX.filter(function(datnum) {
    // return datnum.date.getFullYear() == 2020;
    return datnum.location == 'Germany'
  })
  console.log(filtered)
}

test1()