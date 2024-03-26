$(document).ready(function () {
  $("#aibawk").click(function () {
    $.ajax({
      url: "arg/aibawk_data",
      type: "GET",
      beforeSend: function () {
        $("#spinner").show();
      },
      success: function (data) {
        $("#spinner").hide();
        $("data_table").show();
        $("#display").html(data);
      },
    });
  });

  $("#daterangesearch").click(function () {
    var first_date = $("#first").val();
    var last_date = $("#last").val();
    $.ajax({
      url: "arg/get_date",
      type: "POST",
      data: {
        first_date: first_date,
        last_date: last_date,
      },
      success: function (data) {
        $("#display").html(data);
      },
    });
  });
});
