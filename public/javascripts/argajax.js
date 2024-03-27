$(document).ready(function () {
  $(".btn").click(function () {
    var station_name = String(this.value);
    switch (station_name) {
      case "Aibawk":
        var station = "aibawk";
        Station_Data(station);
        break;
      case "Buhchangphai":
        var station = "buhchangphai";
        Station_Data(station);
        break;
      case "Bunghmun":
        var station = "bunghmun";
        Station_Data(station);
        break;
      case "Chhingchhip":
        var station = "chhingchhip";
        Station_Data(station);
        break;
      case "Haulawng":
        var station = "haulawng";
        Station_Data(station);
        break;
      case "Hnahlan":
        var station = "hnahlan";
        Station_Data(station);
        break;
      case "Kawrtethawveng":
        var station = "kawtethawveng";
        Station_Data(station);
        break;
      case "Khawhai":
        var station = "khawhai";
        Station_Data(station);
        break;
      case "Lungpuk":
        var station = "lungpuk";
        Station_Data(station);
        break;
      case "Lungsen":
        var station = "lungsen";
        Station_Data(station);
        break;
      case "Mualvum":
        var station = "mualvum";
        Station_Data(station);
        break;
      case "North Hlimen":
        var station = "northllimen";
        Station_Data(station);
        break;
      case "North Vanlaiphai":
        var station = "`north vanlaiphai`";
        Station_Data(station);
        break;
      case "Phuldungsei":
        var station = "phuldungsei";
        Station_Data(station);
        break;
      case "Phullen":
        var station = "phullen";
        Station_Data(station);
        break;
      case "Saitual":
        var station = "saitual";
        Station_Data(station);
        break;
      case "Sialsuk":
        var station = "sialsuk";
        Station_Data(station);
        break;
      case "Tawipui South":
        var station = "`tawipui south`";
        console.log(station);
        Station_Data(station);
        break;
      case "Teikhang":
        var station = "teikhang";
        Station_Data(station);
        break;
      case "Thingsai":
        var station = "thingsai";
        Station_Data(station);
        break;
      case "Tuipuibari":
        var station = "tuipuibari";
        Station_Data(station);
        break;
      case "Vaphai":
        var station = "vaphai";
        Station_Data(station);
        break;
      case "Vaseitlang":
        var station = "vaseitlang";
        Station_Data(station);
        break;
      case "Vathuampui":
        var station = "vathuampui";
        Station_Data(station);
        break;
      case "Vawmbuk":
        var station = "vawmbuk";
        Station_Data(station);
        break;
      case "Zawngling":
        var station = "zawngling";
        Station_Data(station);
        break;
    }
  });

  function Station_Data(station) {
    $.ajax({
      url: "arg/arg_data",
      type: "POST",
      data: { station: station },
      beforeSend: function () {
        $("#arg_data").html("Loading Data.....");
      },
      success: function (data) {
        $("#arg_data").html(data);
      },
    });
  }

  $("#daterangesearch").click(function () {
    var first_date = $("#first").val();
    var last_date = $("#last").val();
    var station = $("#daterangesearch").val();
    console.log(station);
    $.ajax({
      url: "arg/get_date",
      type: "POST",
      data: {
        first_date: first_date,
        last_date: last_date,
        station: station,
      },
      success: function (data) {
        $("#arg_data").html(data);
      },
    });
  });
});
