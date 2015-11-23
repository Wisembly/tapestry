$(function () {

  $.get('/stats/json', function (data) {
    var sizes = [];

    data.map(function (el) {
      sizes.push(el.size);
    });

    initChart(sizes);
  });

  function initChart(sizes) {
    console.log(sizes);
    var chartData = {
  		"type": "area",
      "plot": {
        "aspect": "spline"
      },
  		"series": [
        { "values": sizes }
      ]
    };

    zingchart.render({
			id: 'js-stats',
			data: chartData,
			height: 400,
			width: 600
		});
  };
});
