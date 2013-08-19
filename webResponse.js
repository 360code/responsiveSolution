/*
**@author       chunterg
**@name         webResponse.js
**@description  响应式服务端辅助模块
**
*/
var path = require('path');
var fs = require('fs');
module.exports = function(req, res, next){
	var fileType = path.extname(req.originalUrl);
	if(fileType=='.html'||fileType=='.htm'){
		var fileContent = fs.readFileSync(文件服务器路径 + req.originalUrl);
		var cookie = req.headers.cookie||'';
		var width='';
		//匹配客户端定义的cookie
		if(cookie.indexOf('_1688_width')!==-1){
			width = (cookie.match(/(_1688_width=)(\w+)/))[2];
			fileContent = fileContent.toString().replace(/(<html)/,'$1 class="'+width+'"');
		}
		res.end(fileContent);
	}else{
		next();
	}
}