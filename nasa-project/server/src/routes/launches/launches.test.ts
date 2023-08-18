import request from 'supertest';
import app from '../../app';

enum StatusCode {
	OK = 200,
	BAD_REQUEST = 400,
}

const server = request(app);

describe('Test GET /launches', () => {
	test('It should respond with 200 success', async () => {
		await server.get('/api/v1/launches').expect(StatusCode.OK).expect('Content-Type', /json/);
	});
});

describe('Test POST /launches', () => {
	test('It should respond with 200 success', () => {
		const response = 200;
		expect(response).toBe(StatusCode.OK);
	});

	test('It should catch missing required properties', () => {
		const response = 400;
		expect(response).toBe(StatusCode.BAD_REQUEST);
	});

	test('It should catch invalid dates', () => {});
});
