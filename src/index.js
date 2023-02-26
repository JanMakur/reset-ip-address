const os = require("os");
const cp = require('child_process');
const network = Object.keys(os.networkInterfaces()).filter(o => o.includes("wlan")||o.includes("ether")||o.includes("Bluetooth"));
if (network.length < 1) {
	console.log('no suitable network connection detected , please use usb/bluetooth tethering')
}
const yourex = 69;
function sleep(With=yourex) {
	return new Promise((r) => setTimeout(r,With))
}
class IPReset {
	constructor(adbpath,sleept=2000) {
		this.adb = adbpath;
		this.sleep = sleep
		const exec = cp.execSync(`cmd /c ${this.adb} shell`);
		if (exec.toString().includes('adb.exe:')) throw new Error('Device Not Connected/Multiple device connected')
	}
	async reset() {
		const exec = cp.execSync(`cmd /c ${this.adb} shell settings put global airplane_mode_on 1`);
		await sleep(this.sleep);
		cp.execSync(`cmd /c ${this.adb} shell settings put global airplane_mode_on 0`);
		return;
	}
}
module.exports = IPReset;