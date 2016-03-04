'use strict';

var mathUtil = {};

var _ = require('lodash');

mathUtil.sum = function(arr) {
	return arr.reduce(function(sum, num){
		return sum + num;
	});
}

mathUtil.avg = function(arr) {
	return this.sum(arr) / arr.length;

};


module.exports = mathUtil;