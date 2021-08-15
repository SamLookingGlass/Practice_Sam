// Chart 0
const options =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    // each series represents one set of data
    series:[
        {
            name: 'sightings',
            data:[10, 13, 15, 22, 34, 23, 55, 78, 44]
        }
    ],
    // what is are the labels along the x-axis (horizontal line)
    xaxis: {
        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct']
    },
    
}
 
// create the chart
const chart = new ApexCharts(document.querySelector('#chart0'), options);
 
// render the chart
chart.render()

// Chart 1
const options1 =  {
    chart: {
        type: 'bar',
        height:"100%"
    },
    // each series represents one set of data
    series:[
        {
            name: 'sightings',
            data:[70, 13, 15, 22, 34, 23, 55, 78, 44]
        }
    ],
    // what is are the labels along the x-axis (horizontal line)
    xaxis: {
        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct']
    },
    
}
 
// create the chart
const chart1 = new ApexCharts(document.querySelector('#chart1'), options1);
 
// render the chart
chart1.render()

// Chart 2
const options2 =  {
    chart: {
        type: 'pie',
        height:"100%"
    },
    // each series represents one set of data
    series:[1,3,2],
    // what is are the labels along the x-axis (horizontal line)
    labels:['Male','Female','Undisclosed'],
    
}
 
// create the chart
const chart2 = new ApexCharts(document.querySelector('#chart2'), options2);
 
// render the chart
chart2.render()

// Chart 3
const options3 =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    series:[
        
    ],
    noData: {
        "text": "Loading..."
    }
   
    
}
 
// create the chart
const chart3 = new ApexCharts(document.querySelector('#chart3'), options3);
 
// render the chart
chart3.render()