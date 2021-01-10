// 函数柯里化
const { curry } = require('./src/curry');
// 函数防抖
const { debounce } = require('./src/debounce');
// 函数节流
const { throttle } = require('./src/throttle');
// 判断数据类型
const { judge } = require('./src/judge');


module.exports = {
	curry,
	debounce,
	judge,
	throttle
}