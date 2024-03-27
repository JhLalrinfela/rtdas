var express = require("express");
var router = express.Router();
var argquery = require("./argquery");

router.get("/", function (req, res, next) {
  res.render("arg", {
    title: "Automatic Rain Gauge",
  });
});

//ARG Start
router.post("/arg_data", function (req, res, next) {
  var station = req.body.station;
  argquery.data_query(req, res, station);
});

router.post("/get_date", function (req, res, next) {
  var from = req.body.first_date;
  var to = req.body.last_date;
  var station = req.body.station;
  argquery.date_query(req, res, station, from, to);
});
//ARG End

module.exports = router;
