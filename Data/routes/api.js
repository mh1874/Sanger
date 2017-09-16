var express = require('express');
var router = express.Router();
var menus = require("./model/menu");
var goods = require("./model/good");
var article = require("./model/article");
var swiper = require("./model/swiper");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('这是api');
});
//menu数据
router.get('/getdataMenu', function(req, res, next) {
  menus.find(function(err, result){
  	if (err) {
  		res.send("出错了");
  		return
  	}
  	res.send(JSON.stringify(result));
  })
});

router.get('/getdataGood', function(req, res, next) {
  goods.find(function(err, result){
  	if (err) {
  		res.send("出错了");
  		return
  	}
  	res.send(JSON.stringify(result));
  })
});

router.get('/getdataSwiper', function(req, res, next) {
  swiper.find(function(err, result){
    if (err) {
      res.send("出错了");
      return
    }
    res.send(JSON.stringify(result));
  })
});

router.get('/getdataArticle', function(req, res, next) {
  article.find(function(err, result){
  	if (err) {
  		res.send("出错了");
  		return
  	}
  	res.send(JSON.stringify(result));
  })
});


module.exports = router;


