var database = require("../database");

exports.data_query = function (req, res, station) {
  var query = `Select * from ${station} order by DateAndTime Desc`;
  database.query(query, function (error, data) {
    let r_data = data;
    function rename() {
      r_data = r_data.map(function (obj) {
        // Assign new key
        obj["RainDaily"] = obj["Rain Daily"];
        obj["RainHourly"] = obj["Rain Hourly"];

        // Delete old key
        delete obj["Rain Daily"];
        delete obj["Rain Hourly"];

        return obj;
      });
    }
    rename();

    if (error) {
      throw error;
    } else {
      res.render("table", {
        title: "AUTOMATIC RAIN GAUGE",
        station: station,
        action: "list",
        sampleData: r_data,
      });
    }
  });
};

exports.date_query = function (req, res, station, from, to) {
  var query = `select * from ${station} where DateAndTime between '${from}' and '${to}' order by DateAndTime`;
  database.query(query, function (error, data) {
    let l_data = data;
    function rename() {
      l_data = l_data.map(function (obj) {
        // Assign new key
        obj["RainDaily"] = obj["Rain Daily"];
        obj["RainHourly"] = obj["Rain Hourly"];

        // Delete old key
        delete obj["Rain Daily"];
        delete obj["Rain Hourly"];

        return obj;
      });
    }
    rename();

    if (error) {
      throw error;
    } else {
      res.render("table", {
        title: "RTDAS DATA",
        station: "Aibawk-Date_Range",
        action: "list",
        sampleData: l_data,
      });
    }
  });
};
