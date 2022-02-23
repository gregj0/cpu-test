export function mySlowFunction(baseNumber) {
	var startTime = new Date().getTime();
  console.log(`starttime ${startTime}`);
	let result = 0;	
	for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
		result += Math.atan(i) * Math.tan(i);
	};
  var endTime = new Date().getTime();
  console.log(`endtime ${endTime}`);
  console.log(`Testing ${(endTime - startTime)/1000} seconds`);
	return (endTime - startTime)/1000;
}

