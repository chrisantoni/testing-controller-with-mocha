var Memo = require('../model/memo')

module.exports = {
  get_all_memos : function(req, res) {
    Memo.find({}, function(err,data){
    if(err)throw err
    res.send(data)
    })
  },
  create_memos : function(req, res, next) {
    var newMemos = new Memo({
      memoID    : req.body.memoID,
      title     : req.body.title,
      notes     : req.body.notes,
      createdAt : new Date(),
      updatedAt : new Date()
    })
    newMemos.save(function(err,data){
      if(err)throw err
      res.send(data)
    })
  },
  update_memos:function (req,res) {
  Memo.findOneAndUpdate({memoID:req.body.memoID},
  {title:req.body.title,notes:req.body.notes},
  {new:true},
    function(err,data){
      if(err)throw err
      res.send(data)
      }
    )
  },
  delete_memos : function(req,res){
    var input_memoID = req.body.memoID
    Memo.findOneAndRemove({memoID:input_memoID},function(err,data){
      if(err)throw err
      res.send(data)
    })
  }
}
