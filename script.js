// Chart 0
var options = {
  series: [{
  name: 'TEAM A',
  type: 'area',
  data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
}, {
  name: 'TEAM B',
  type: 'line',
  data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
}],
  chart: {
  height: 350,
  type: 'line',
},
stroke: {
  curve: 'smooth'
},
fill: {
  type:'solid',
  opacity: [0.35, 1],
},
labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
markers: {
  size: 0
},
title: {
  text: 'Series A/B'
},
yaxis: [
  {
    title: {
      text: 'Series A',
    },
  },
  {
    opposite: true,
    title: {
      text: 'Series B',
    },
  },
],
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if(typeof y !== "undefined") {
        return  y.toFixed(0) + " points";
      }
      return y;
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart0"), options);
chart.render();

// Chart 1
var options1 = {
    series: [{
    name: 'Product A',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Product B',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Product C',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'Product D',
    data: [9, 7, 5, 8, 6, 9, 4]
  }, {
    name: 'Product E',
    data: [25, 12, 19, 32, 25, 24, 10]
  }],
    chart: {
    type: 'bar',
    height: 300,
    stacked: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
    text: 'Product Sales'
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    title: {text:"MonthYear"},
    labels: {
      formatter: function (val) {
        return val + "'21"
      }
    }
  },
  yaxis: {
    title: {
      text: "Gross Sales ($)"
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$" + val + ",000"
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'left',
    offsetX: 40
  }
  };

  var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
  chart1.render();

// Chart 2
var options2 = {
  chart: {
    type: "area",
    height: 300,
    foreColor: "#999",
    stacked: true,
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06
    }
  },
  colors: ['#00E396', '#0090FF'],
  stroke: {
    curve: "smooth",
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    name: 'Total Views',
    data: generateDayWiseTimeSeries(0, 18)
  }, {
    name: 'Unique Views',
    data: generateDayWiseTimeSeries(1, 18)
  }],
  markers: {
    size: 0,
    strokeColor: "#fff",
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6
    }
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      offsetX: 14,
      offsetY: -5
    },
    tooltip: {
      enabled: true
    }
  },
  grid: {
    padding: {
      left: -5,
      right: 5
    }
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy"
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  fill: {
    type: "solid",
    fillOpacity: 0.7
  }
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);

chart2.render();

function generateDayWiseTimeSeries(s, count) {
  var values = [[
    4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5
  ], [
    2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2
  ]];
  var i = 0;
  var series = [];
  var x = new Date("11 Nov 2012").getTime();
  while (i < count) {
    series.push([x, values[s][i]]);
    x += 86400000;
    i++;
  }
  return series;
}

// Chart 3

// const options3 =  {
//   chart: {
//       type: 'line',
//       height:"100%"
//   },
//   series:[
      
//   ],
//   noData: {
//       "text": "Loading..."
//   }
 
  
// }

// // create the chart
// const chart = new ApexCharts(document.querySelector('#chart3'), options3);

// // render the chart
// chart3.render()
