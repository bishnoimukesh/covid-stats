function drawChart(Canvas, labels, label, data, backgroundColor, type) {
  let myChart = new Chart(Canvas, {
    type: type || 'line',
    data: {
      labels,
      datasets: [{
        label,
        data,
        backgroundColor
      }]
    },
    options: {
      
      scales: {
        xAxes: [{
          gridLines: {
              // display: false,
              color: 'transparent',

              zeroLineColor: '#000'
          },
          ticks: {
            fontColor: "#fff"
          },
        }],
        yAxes: [{
            gridLines: {
                // display: false,
                color: 'transparent',
                zeroLineColor: '#ffcc33'
            },
            ticks: {
              fontColor: "#fff"
            },
        }],
        legend: {
          labels: {
            fontColor: '#ddd'
          }
        }
      }
    }
  });
}
