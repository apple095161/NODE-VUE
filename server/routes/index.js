var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).send(
    {
      success: true,
      data: {
        title: 'test',
        name: '4456'
      },
      message: '取得成功'
    })

  // res.render('index', { title: 'Express' });
});
router.post('/', function (req, res, next) {
  let data = {
    ...req.fields,
  }
  data.arrar = Object.keys(req.fields).map(item => {
    return {
      key: item, value: item
    }
  })
  res.status(200).send({
    success: true,
    data: data,
    message: '讀取成功'
  }).end();
  // if (req.body.title) {
  //   res.status(200).send(
  //     {
  //       success: true,
  //       data: {
  //         title: 'test',
  //         name: '4456'
  //       },
  //       message: '取得成功'
  //     }).end();
  // } else {
  //   res.status(400).send(
  //     {
  //       success: false,
  //       message: '無法取得'
  //     }).end();
  // }

  // res.render('index', { title: 'Express' });
});

module.exports = router;
