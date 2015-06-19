/**
 * fis.baidu.com
 */
 
var babel = require('babel-core');

module.exports = function (content, file, opts) {
	file.extras.isES6 = (file.extras.isES6 == undefined) ? true : file.extras.isES6;
	if (!file.extras.isES6) return content;
	var result = babel.transform(content, opts);
	return result.code;
};
