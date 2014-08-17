# translate-gg-cn

Translate your sentences with <translate.google.cn>

## Usage

- As node module

```js
var translate = require('translate-gg-cn')

translate({
  sl: 'zh-CN',  // 'zh-CN' defaulted
  tl: 'en',  // 'en' defaulted
  q: '我爱你'  // required
}, function(err, result){
  console.log(result)
})
```

- As CLI tool

```
# install from npm
$ npm i -g translate-gg-cn

# t/translate/translate-gg-cn
$ t 我爱你
>> 译文: I love you

# "" pairs are optional
$ t --sl en --tl zh-TW "You and I are Wind Sand"
>> 译文: 你是風兒我是沙
```