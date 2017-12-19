(function() {
  var d3 = Plotly.d3;
  
  var WIDTH_IN_PERCENT_OF_PARENT = 90,
      HEIGHT_IN_PERCENT_OF_PARENT = 90;
  
  var gd3 = d3.select('body')
      .append('div')
      .style({
          width: WIDTH_IN_PERCENT_OF_PARENT + '%',
          'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
  
          height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
          'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
      });
  
  var gd = gd3.node();
  
  // Plotly.plot(gd, [{
  //     type: 'bar',
  //     x: [1, 2, 3, 4],
  //     y: [5, 10, 2, 8],
  //     marker: {
  //         color: '#C8A2C8',
  //         line: {
  //             width: 2.5
  //         }
  //     }
  // }], {
  //     title: 'Auto-Resize',
  //     font: {
  //         size: 16
  //     }
  // });

  
  //"data/SearchSample.csv"


  
  Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
    
  var trace1 = {
    type: "scatter",
    mode: "lines",
    name: 'AAPL High',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'AAPL.High'),
    line: {color: '#17BECF'}
  }
  
  var trace2 = {
    type: "scatter",
    mode: "lines",
    name: 'AAPL Low',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'AAPL.Low'),
    line: {color: '#7F7F7F'}
  }
  
  var data = [trace1,trace2];
  
  var layout = {
    title: 'Basic Time Series',
  };
  
    Plotly.plot(gd, data, layout);
  })

  window.onresize = function() {
      Plotly.Plots.resize(gd);
  };
  
})();