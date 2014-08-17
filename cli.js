#!/usr/bin/env node
var minimist = require('minimist')
var args = minimist(process.argv.slice(2))
var translate = require('./index')

var opt = {
  sl: args.sl,
  tl: args.tl,
  q: args._.join(' ')
}

translate(opt, function(err, result){
  if (err) {
    return console.log('错误:', err)
  }
  console.log('译文:', result)
})