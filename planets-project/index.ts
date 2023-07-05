import fs from 'fs';
import { parse } from 'csv-parse';

const results: (string | Buffer)[] = [];

//Read the CSV file and save it in results
const readStreamEvent = fs.createReadStream('./data/kepler_data.csv');

//Use a pipe to parse the CSV file as js objects
readStreamEvent.pipe(parse({ comment: '#', columns: true })).on('data', (data) => {
	results.push(data);
});

readStreamEvent.on('error', (err) => {
	console.log(err);
});

readStreamEvent.on('end', () => {
	console.log('finish reading file');
	console.log({ results });
});
