const IPReset = require('./src');
const ipr = new IPReset('platform-tools\adb.exe',1000);
(() => {
	await ipr.reset();
	console.log('Your IP Address has been changed!')
})();