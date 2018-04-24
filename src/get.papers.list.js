/*
    读取问卷列表
*/
const conn = require('./conn.js')
module.exports = (req, res) => {
  setTimeout(() => {
    let sql = 'select * from `papers` order by `ctime` desc'
    conn.query(sql, function(error, result) {
      if (error == null) {
        res.json({
          error: 0,
          message: 'ok',
          data:result
        })
      } else {
        console.log(error)
        res.json({
          error: 1,
          message: 'error'
        })
      }
    })
  }, 0)
}
