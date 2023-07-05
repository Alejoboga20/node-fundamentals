import fs from 'fs';
import { parse } from 'csv-parse';

const results: (string | Buffer)[] = [];

//Read the CSV file and save it in results
fs.createReadStream('./data/kepler_data.csv')
	.on('data', (data) => {
		results.push(data);
	})
	.on('error', (err) => {
		console.log(err);
	})
	.on('end', () => {
		console.log('finish reading file');
		console.log({ results });
	});
