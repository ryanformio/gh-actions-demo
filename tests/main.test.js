const request = require('supertest');
const app = require('../index.js');

describe('Test the root path', () => {

    test('It should response the GET method', async () => {
        const response = await request('http://localhost:3005').get('/');
        // console.log(response)
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello Universe!');
    });
});