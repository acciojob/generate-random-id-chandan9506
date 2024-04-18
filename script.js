function makeid(l) {
  // write your code here
	let char = "1234567890QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzxcvbnm";
	let randomString = "";
	for (let i=0; i<l; i++) {
		let randomNum = Math.floor(Math.random()*char.length);
		randomString += char.substring(randomNum,randomNum+1);
	}
	return randomString;
}

// Do not change the code below.

const l = prompt("Enter a number.");
alert(makeid(l));
