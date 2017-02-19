var mongoose = require('mongoose')
var Schema = mongoose.Schema

var memoSchema = new Schema({
  memoID:Number,
  title:String,
  notes:String
},{
  timestamps : true
})

var Memo = mongoose.model('Memo',memoSchema)

module.exports = Memo
