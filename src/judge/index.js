'use strict';

/**
 * 判断数据类型
 * * {any} target 目标值
 */

function judge(target) {
	return Object.prototype.toString.call(target).split(' ')[1].split(']')[0];
};

module.exports = {
	judge
}