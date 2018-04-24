const conn = require('./conn.js')
const md5 = require('md5')
var path = require('path')

module.exports = (req, res) => {

    var username = req.body.username,
        password = md5(req.body.password),
        phone = req.body.phone,
        email = req.body.email,
        sex = req.body.sex
    var sql = 'insert into `users` set ? '
    conn.query(sql, {
        username, phone, email, sex, password
    }, function (error, result) {
        if (error == null) {
            res.cookie('message',JSON.stringify({
                status:'success',
                link:'/login',
                linkText:'登陆',
                msg:'注册成功'
            }))
            res.sendFile(path.resolve('./') + '/public/message.html')
        } else {
            console.log(result)
            res.cookie('message',JSON.stringify({
                status:'error',
                link:'/regist',
                linkText:'重新注册',
                msg:'注册失败'
            }))
            res.sendFile(path.resolve('./') + '/public/message.html')
        }
    })

}
