var express = require('express');
var router = express.Router();

/* GET download page. */
router.get('/', function(req, res, next) {
  res.render('download', { title: 'IoTrust' });
});

module.exports = router;
