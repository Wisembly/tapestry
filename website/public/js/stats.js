$(function () {

  $.get('/stats/json', function (data) {
    data = data.map(function (el) {
      return el.size;
    });

    initChart(data);
  });

  function initChart(_data) {
    var data = {
      labels: ["0.20", "0.30"],
      datasets: [
        {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          // data: [28, 48, 40, 19, 86, 27, 90]
          data: _data
        }
      ]
    };
    var ctx = document.getElementById('js-Stats').getContext('2d');
    var myLineChart = new Chart(ctx).Line(data);
  }

});
