/*
  验证用户登陆
*/
const conn = require('./conn.js')
var path = require('path')
var md5 = require('md5')
module.exports = (req, res) => {

  var username = req.body.username,
    password = md5(req.body.password)
  var sql = 'select `username`,`id`,`email`,`phone`,`photo`,`sex` from `users` where `username`="' + username + '" && `password`="' + password + '"'
  conn.query(sql, function (error, result) {
    if (error == null) {
      if (result.length == 0) {
        //登陆失败
        res.cookie('message', JSON.stringify({
          status: 'error',
          link: '/login',
          linkText: '重新登陆',
          msg: '登陆失败，用户名或密码错误'
        }))
        res.sendFile(path.resolve('./') + '/public/message.html')
      } else {
        //登陆成功
        req.session.username = username
        req.session.loginInfo = result[0]
        res.cookie('message', JSON.stringify({
          status: 'error',
          link: '/index',
          linkText: '管理首页',
          msg: '登陆成功',
          userinfo:result[0]
        }))
        res.sendFile(path.resolve('./') + '/public/message.html')
      }
    } else {
      console.log(result)
      res.json({
        error: 1,
        message: 'error'
      })
    }
  })

}
