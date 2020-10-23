//1获取浏览器名称和版本
function getBrower() {
	let agent = navigator.userAgent.toLowerCase();
	let browser = {
		appname: 'unknown',
		version: '0'
	};
	if (/(qqbrowser|ubrowser)\D+(\d[\d.]*)/.test(agent)) { //qq浏览器,UC浏览器
		browser.appname = RegExp.$1;
		browser.version = RegExp.$2;
	} else if (/se[\s\.a-zA-Z\d]+metasr/.test(agent)) {
		browser.appname = 'sougou';
		browser.version = '0';
	} else if (/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(agent)) {
		browser.appname = RegExp.$1;
		browser.version = RegExp.$2;
	} else if (/version\D+(\d[\d.]*).*safari/.test(agent)) { // safari  
		browser.appname = 'safari';
		browser.version = RegExp.$2;
	}
	return browser;
}

//2获取浏览器的操作系统平台
function getPlatform() {
	let os = {
		platform: navigator.platform.toLowerCase(),
	};
	return os;
}

//3获取当前设备类型
function getDevice() {
	let agent = navigator.userAgent.toLowerCase();
	let result = {
		device: function() {
			if (/windows/.test(agent)) {
				return 'WindowsPC';
			} else if (/iphone|ipod/.test(agent) && /mobile/.test(agent)) {
				return 'iPhone';
			} else if (/ipad/.test(agent) && /mobile/.test(agent)) {
				return 'iPad';
			} else if (/android/.test(agent) && /mobile/.test(agent)) {
				return 'Android';
			} else if (/linux/.test(agent)) {
				return 'LinuxPC';
			} else if (/mac/.test(agent)) {
				return 'Mac';
			} else {
				return 'Other';
			}
		}(),
	};
	return result;
}
