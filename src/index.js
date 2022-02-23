import 'dotenv/config.js';
import cors from 'cors';
import express from 'express';
import * as utils from './utils.js';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  let base=req.query.base;
  
  var execTime = utils.mySlowFunction(base); // higher number => more iterations => slower
    
  res.send(`Testing ${base} took  ${execTime} seconds` );
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);




