'use strict';
/**
 * 函数柯里化包装器
 * @param {function} func 目标函数
 */
function curry(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else if (args.length < func.length) {
			return function (...args2) {
				return curried.apply(this, args.concat(args2));
			};
		}
	};
};

module.exports = {
	curry
}