"use strict";

let sheetId = "1nh2t2wr_MwTgl8RtahhIyMd1K5CJ9cy-2lk2-aAHS-I";
let sheetNumber = 1;
let sheetUrl = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber}/public/full?alt=json`;
console.log(sheetUrl);

fetch(sheetUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendChart(json.feed.entry);
  });

function appendChart(data) {
  console.log(data);

  // prepare data
  let cows = [];
  let years = [];


  for (let object of data) {
    cows.push(object.gsx$cows.$t);
    years.push(object.gsx$years.$t);
  }

  // generate chart
  let chart = document.getElementById('chart');
  let myDoughnutChart = new Chart(chart, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: cows,
        label: 'CO2 Neutralitet',
         backgroundColor: ["#4BB131", "rgba(0,128,0 ,0.1 ) ",],
        borderColor: "rgba(0, 0, 0, 0.2)",
        fontColor: 'white',
        borderWidth: 2,
        scaleFontColor: "#FFF",
        hoverBackgroundColor: "rgba(0, 0, 0, 0.3)",
        hoverBorderColor: "rgba(0, 0, 0, 0.1)"
      }],

      labels: years

    },
    options: {

      scales: {

      }
    }

  });
}

Chart.defaults.global.defaultFontColor = "#fff";
