var express = require("express");
var router = express.Router();

var database = require("../database");
var argquery = require("./argquery");

router.get("/", function (req, res, next) {
  res.render("arg_data", {
    title: "RTDAS DATA",
  });
});

//Aibawk Start
router.get("/aibawk_data", function (req, res, next) {
  var station = "aibawk";
  argquery.data_query(req, res, station);
});

router.post("/get_date", function (req, res, next) {
  var first_date = req.body.first_date;
  var last_date = req.body.last_date;
  var station = req.body.station;
  console.log(station);
  argquery.date_query(req, res, station, first_date, last_date);
});
//Aibawk End

//Buhchang Start
router.get("/buhchang_data", function (req, res, next) {
  var station = "buhchangphai";
  argquery.data_query(req, res, station);
});


//Buhchang End

module.exports = router;
