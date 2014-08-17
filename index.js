var _ = require('underscore')
var request = require('request')

module.exports = translate

function translate(opt, cb){
  if (!opt.q) {
    return cb(new Error('缺少原文'))
  }
  request({
    uri: 'http://translate.google.cn/translate_a/t',
    qs: _.defaults({}, opt, {
      client: 't',
      sl: 'zh-CN',
      tl: 'en',
      ie: 'UTF-8',
      oe: 'UTF-8'
    })
  }, function(err, res, json){
    if (err) {
      return cb(err)
    }

    // fix google bad json
    json = json.replace(/\,+/g, ',');

    try {
      var obj = JSON.parse(json)
      var text = obj[0][0][0]

      cb(null, text)
    } catch(e) {
      cb(new Error('json解析错误'))
    }
  })
}