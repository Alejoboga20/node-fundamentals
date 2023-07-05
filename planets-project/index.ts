import fs from 'fs';
import { parse } from 'csv-parse';
import { Planet } from './types/Planets';

const results: Planet[] = [];

const isHabitablePlanet = ({ koi_disposition, koi_insol, koi_prad }: Planet) =>
	koi_disposition === 'CONFIRMED' && +koi_insol > 0.36 && +koi_insol < 1.11 && +koi_prad < 1.6;

//Read the CSV file and save it in results
const readStreamEvent = fs.createReadStream('./data/kepler_data.csv');

//Use a pipe to parse the CSV file as js objects
readStreamEvent.pipe(parse({ comment: '#', columns: true })).on('data', (data: Planet) => {
	if (isHabitablePlanet(data)) {
		results.push(data);
	}
});

readStreamEvent.on('error', (err) => {
	console.log(err);
});

readStreamEvent.on('end', () => {
	console.log('finish reading file');
	console.log({ results });
});
