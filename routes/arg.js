var express = require("express");
var router = express.Router();
var database = require("../database");
//var argquery = require("./argquery");

router.get("/", function (req, res, next) {
  res.render("arg", {
    title: "Automatic Rain Gauge",
  });
});

//ARG Start
router.post("/arg_data", function (req, res, next) {
  var station = req.body.station;
  //argquery.data_query(req, res, stations);
  var query = `SELECT * FROM ${station} WHERE DateAndTime >= DATE_SUB(CURDATE(), INTERVAL 30 DAY) order by DateAndTime Desc;`;
  database.query(query, function (error, data) {
    rename(data);
    if (error) {
      throw error;
    } else {
      res.render("arg_data", {
        title: "AUTOMATIC RAIN GAUGE",
        station: station,
        action: "list",
        sampleData: data,
      });
    }
  });
});

function rename(data) {
  data = data.map(function (obj) {
    // Assign new key
    obj["RainDaily"] = obj["Rain Daily"];
    obj["RainHourly"] = obj["Rain Hourly"];

    // Delete old key
    delete obj["Rain Daily"];
    delete obj["Rain Hourly"];
    return obj;
  });
}

router.post("/get_date", function (req, res, next) {
  var from = req.body.first_date;
  var to = req.body.last_date;
  var station = req.body.station;
  argquery.date_query(req, res, station, from, to);
});
//ARG End

module.exports = router;
