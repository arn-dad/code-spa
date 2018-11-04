import { getRandomInt } from './utils';

export const pieData = () => ({
  // type   : 'pie',
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [
      getRandomInt(15, 47),
      getRandomInt(15, 37),
      getRandomInt(24, 40)
    ],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
});

export const chartData = () => ({
  responsive : true,
  labels     : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets   : [
    {
      label                     : 'My First dataset',
      fill                      : false,
      lineTension               : 0.1,
      backgroundColor           : 'rgba(75,192,192,0.4)',
      borderColor               : 'rgba(75,192,192,1)',
      borderCapStyle            : 'butt',
      borderDash                : [],
      borderDashOffset          : 0.0,
      borderJoinStyle           : 'miter',
      pointBorderColor          : 'rgba(75,192,192,1)',
      pointBackgroundColor      : '#fff',
      pointBorderWidth          : 1,
      pointHoverRadius          : 5,
      pointHoverBackgroundColor : 'rgba(75,192,192,1)',
      pointHoverBorderColor     : 'rgba(220,220,220,1)',
      pointHoverBorderWidth     : 2,
      pointRadius               : 1,
      pointHitRadius            : 10,
      data                      : [
        getRandomInt(50, 65),
        getRandomInt(35, 59),
        getRandomInt(27, 87),
        getRandomInt(55, 67),
        getRandomInt(75, 27),
        getRandomInt(75, 67),
        getRandomInt(35, 27)
      ]
    }
  ]
});

export const radarData = () => ({
  labels   : ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets : [
    {
      label                     : 'My First dataset',
      backgroundColor           : 'rgba(179,181,198,0.2)',
      borderColor               : 'rgba(179,181,198,1)',
      pointBackgroundColor      : 'rgba(179,181,198,1)',
      pointBorderColor          : '#fff',
      pointHoverBackgroundColor : '#fff',
      pointHoverBorderColor     : 'rgba(179,181,198,1)',
      data                      : [
        getRandomInt(40, 75),
        getRandomInt(45, 69),
        getRandomInt(37, 47),
        getRandomInt(45, 67),
        getRandomInt(65, 47),
        getRandomInt(85, 37),
        getRandomInt(85, 47)
      ]
    },
    {
      label                     : 'My Second dataset',
      backgroundColor           : 'rgba(255,99,132,0.2)',
      borderColor               : 'rgba(255,99,132,1)',
      pointBackgroundColor      : 'rgba(255,99,132,1)',
      pointBorderColor          : '#fff',
      pointHoverBackgroundColor : '#fff',
      pointHoverBorderColor     : 'rgba(255,99,132,1)',
      data                      : [
        getRandomInt(45, 45),
        getRandomInt(46, 39),
        getRandomInt(38, 87),
        getRandomInt(70, 77),
        getRandomInt(65, 57),
        getRandomInt(45, 67),
        getRandomInt(65, 57)
      ]
    }
  ]
});

export const polarData = () => ({
  datasets: [{
    data: [
      getRandomInt(5, 21),
      getRandomInt(15, 37),
      getRandomInt(6, 50),
      getRandomInt(19, 18),
      getRandomInt(32, 47)
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset'
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
});

export const doughnutData = () => ({
  responsive : true,
  labels     : [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data            : [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor : [
      '#CCC',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
});

export const dataSets = {
  doughnutData, polarData, radarData, chartData, pieData
};
