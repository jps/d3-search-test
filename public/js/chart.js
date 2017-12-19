(function() {  
  var queue = Plotly.d3.queue

  var WIDTH_IN_PERCENT_OF_PARENT = 90,
      HEIGHT_IN_PERCENT_OF_PARENT = 90;
  
  var gd3 = Plotly.d3.select('body')
      .append('div')
      .style({
          width: WIDTH_IN_PERCENT_OF_PARENT + '%',
          'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
  
          height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
          'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
      });
  
  var gd = gd3.node();
  
  let unpack = function unpack(rows, key) {
    return rows.map(function(row) {
       return row[key]; 
      });    
  };
    
  d3.queue()
    .defer(d3.csv, "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv")
    .await(makeChart)

  function makeChart(error, data1) {
    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: 'AAPL High',
      x: unpack(data1, 'Date'),
      y: unpack(data1, 'AAPL.High'),
      line: {color: '#17BECF'}
    }
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: 'AAPL Low',
      x: unpack(data1, 'Date'),
      y: unpack(data1, 'AAPL.Low'),
      line: {color: '#7F7F7F'}
    }
    
    var data = [trace1,trace2];
    
    var layout = {
      title: 'Basic Time Series',
    };
    
    Plotly.plot(gd, data, layout);
  
    window.onresize = function() {
        Plotly.Plots.resize(gd);
    };
  }
})();