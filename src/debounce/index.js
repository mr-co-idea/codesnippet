'use strict';
// 防抖 —— 只触发一次

/**
 * 防抖包装函数
 * @param {number} wait 触发时间间隔
 * @param {function} func 被包装函数
 */
const debounce = function deb(wait, func) {
	let timer = null;

	return function () {
		// 如果再次触发则清空后，重新计时
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}

		timer = setTimeout(() => {
			func.apply(this, arguments)
		}, wait);
	};
};

module.exports = {
	debounce
}