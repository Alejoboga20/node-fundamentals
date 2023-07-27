import fs from 'fs';
import { parse } from 'csv-parse';
import { Planet } from '../types/Planets';

const results: Planet[] = [];

const isHabitablePlanet = ({ koi_disposition, koi_insol, koi_prad }: Planet) =>
	koi_disposition === 'CONFIRMED' && +koi_insol > 0.36 && +koi_insol < 1.11 && +koi_prad < 1.6;

const loadPlanetsData = (): Promise<void> => {
	return new Promise((resolve, reject) => {
		fs.createReadStream('./data/kepler_data.csv')
			.pipe(parse({ comment: '#', columns: true }))
			.on('data', (data: Planet) => {
				if (isHabitablePlanet(data)) {
					results.push(data);
				}
			})
			.on('error', (err) => {
				console.log(err);
				reject(err);
			})
			.on('end', () => {
				console.log(
					'Finish reading file. There are ' + results.length + ' habitable planets found!'
				);
				console.log(results.map((planet) => planet.kepler_name));
				resolve();
			});
	});
};

export { loadPlanetsData, results as planets };
