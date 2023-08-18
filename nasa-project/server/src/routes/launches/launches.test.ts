import request from 'supertest';
import app from '../../app';

enum StatusCode {
	OK = 200,
	CREATED = 201,
	BAD_REQUEST = 400,
}

const server = request(app);

describe('Test GET /launches', () => {
	test('It should respond with 200 success', async () => {
		await server.get('/api/v1/launches').expect(StatusCode.OK).expect('Content-Type', /json/);
	});
});

describe('Test POST /launches', () => {
	const launchData = {
		mission: 'USS Enterprise',
		rocket: 'NCC 1701-D',
		destination: 'Kepler-186 f',
		launchDate: 'January 4, 2028',
	};

	const launchDataWithoutDate = {
		mission: 'USS Enterprise',
		rocket: 'NCC 1701-D',
		destination: 'Kepler-186 f',
	};

	test('It should respond with 201 success', async () => {
		const response = await server
			.post('/api/v1/launches')
			.send(launchData)
			.expect(StatusCode.CREATED)
			.expect('Content-Type', /json/);

		expect(response.body).toMatchObject({
			launch: {
				customers: ['NASA', 'ZTM'],
				destination: 'Kepler-186 f',
				flightNumber: 101,
				launchDate: '2028-01-04T03:00:00.000Z',
				mission: 'USS Enterprise',
				rocket: 'NCC 1701-D',
				success: true,
				upcoming: true,
			},
			message: 'Launch added',
		});
	});

	test('It should catch missing required properties', async () => {
		const response = await server
			.post('/api/v1/launches')
			.send(launchDataWithoutDate)
			.expect(StatusCode.BAD_REQUEST)
			.expect('Content-Type', /json/);

		expect(response.body).toStrictEqual({ error: 'Bad Request - Missing Params' });
	});

	test('It should catch invalid dates', async () => {
		const response = await server
			.post('/api/v1/launches')
			.send({ ...launchDataWithoutDate, launchDate: 'not a date' })
			.expect(StatusCode.BAD_REQUEST)
			.expect('Content-Type', /json/);

		expect(response.body).toStrictEqual({ error: 'Bad Request - Invalid Date' });
	});
});
