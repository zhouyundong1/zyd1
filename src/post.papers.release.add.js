/*
    提交问卷
*/
const conn = require('./conn.js')
module.exports = (req, res) => {
  setTimeout(() => {
    let content = req.body.content,
    item = req.body.item,
    cuid = req.body.cuid,
    paper_id = req.body.paper_id,
    note = req.body.note,
    title = req.body.title,
    sql = 'insert into `answer` set ?'
    conn.query(sql,{content,item,cuid,paper_id,note,title}, function(error, result) {
      if (error == null) {
        res.json({
          error: 0,
          message: 'ok',
        })
      } else {
        console.log(result)
        res.json({
          error: 1,
          message: 'error'
        })
      }
    })
  }, 0)
}
