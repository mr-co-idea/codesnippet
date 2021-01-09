'use strict';

/**
 * 节流包装器
 * @param {function} fn 函数方法
 * @param {number} gapTime 间隔时间
 */
function throttle(fn, gapTime) {
	// 最近一次时间，初始化为null
	let _lastTime = null;

	return function () {
		// 当前时间
		let _nowTime = + new Date();

		if (_nowTime - _lastTime > gapTime || !_lastTime) {
			fn.apply(this, arguments);
			_lastTime = _nowTime;
		}
	}
};

module.exports = {
	throttle
}