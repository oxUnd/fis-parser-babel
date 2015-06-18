/**
 * fis.baidu.com
 */
 
var babel = require('babel-core');

module.exports = function (content, file, opts) {
	file.isES6 = (file.isES6 == undefined) ? true : file.isES6;
	if (!file.isES6) return content;
	var result = babel.transform(content, opts);
	//file.transform = result;
	return result.code;
};
