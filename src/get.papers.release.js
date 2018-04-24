const path = require('path')
const conn = require('./conn.js')
const cuid = require('cuid')
module.exports = (req, res) => {
  if(!req.query.id){
    require('./message')({
      status:'error',
      msg: '你来晚了'
    },res)
    return
  }

  //验证用户是否已经答过了
  var id = req.query.id
  if(req.cookies['releaseInfo'+id]){
    require('./message')({
      status:'error',
      msg:'您已经答完了'
    },res)
    return
  } else{
    res.cookie('release_paper_id',id)
    res.cookie('releaseInfo'+id,JSON.stringify({
      paper_id:id,
      cuid:cuid()
    }))
    res.sendFile(path.resolve('./')+'/public/release.html')
  }
}
  // var id = req.query.id
  // res.cookie('release_paper_id',id)
  // res.cookie('releaseInfo'+id,JSON.stringify({
  //   paper_id:id,
  //   cuid:cuid()
  // }))

  // var id = req.query.id,
  // sql = 'select * from `papers` where `id` = "'+id+'"'
  // conn.query(sql,(error,result)=>{
  //   if(error){
  //     res.send({
  //       error:0,
  //       message:'ok',
  //       data:result[0]
  //     })
  //   }else{
  //     console.log(error)
  //     res.send({
  //       error:1,
  //       message:'error'
  //     })
  //   }
  // })


