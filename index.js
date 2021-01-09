// 函数柯里化
const { curry } = require('./src/curry/index.js');
// 函数防抖
const { debounce } = require('./src/debounce/index.js');
// 函数节流
const { throttle } = require('./src/throttle/index.js');
// 判断数据类型
const { judge } = require('./src/judge/index.js');


module.exports = {
	curry,
	debounce,
	judge,
	throttle
}