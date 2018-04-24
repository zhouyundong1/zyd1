const mysql = require('mysql') //引入模块
//链接数据库
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'ques'
})
conn.connect()

module.exports = conn
