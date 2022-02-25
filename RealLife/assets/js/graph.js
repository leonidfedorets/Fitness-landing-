var myChart = new Chart("myChart", {
    type: "line",
    data: {},
    options: {}
  });

  var xValues = [200,400,600,800,1000,1200,1400,1600,1800,2000,2200,2400,2600,2800,3000,3200];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});


