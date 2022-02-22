import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  let base=req.query.base;
  
  var execTime = mySlowFunction(base); // higher number => more iterations => slower
    
  res.send(`Testing ${base} took  ${execTime} seconds` );
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);




function mySlowFunction(baseNumber) {
	var startTime = new Date().getTime();
  console.log(`starttime ${startTime}`);
	let result = 0;	
	for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
		result += Math.atan(i) * Math.tan(i);
	};
  var endTime = new Date().getTime();
  console.log(`endtime ${endTime}`);
	return (endTime - startTime)/1000;
}