$(document).ready(function () {
  $("#aibawk").click(function () {
    $.ajax({
      url: "arg/aibawk_data",
      type: "GET",
      beforeSend: function () {
        console.log("loading");
      },
      success: function (data) {
        $("#display").html(data);
        console.log("data recieve");
      },
    });
  });

  $("buhchangphai").click(function () {
    $.ajax({
      url: "arg/buhchang_data",
      type: "GET",
      beforeSend: function () {
        console.log("loading");
      },
      success: function (data) {
        $("#display").html(data);
        console.log("data recieve");
      },
    });
  });

  $("#daterangesearch").click(function () {
    var first_date = $("#first").val();
    var last_date = $("#last").val();
    var station = $("#stations").val();
    console.log(station);
    switch (station) {
      case aibawk:
        SelectStation(first_date, last_date, station);
        break;
      case buhchangphai:
        SelectStation(station);
        break;
    }
  });

  function SelectStation(first_date, last_date, station) {
    $.ajax({
      url: "arg/get_date",
      type: "POST",
      data: {
        first_date: first_date,
        last_date: last_date,
        station: station,
      },
      success: function (data) {
        $("#display").html(data);
      },
    });
  }
});
