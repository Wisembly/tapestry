$(function () {

  $.get('/stats/json', function (data) {
    console.log(data);
  })
});
