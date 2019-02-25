const { getApiRequest } = require('../src/lib/getApiRequest');
const { expect } = require('chai');

const uri = 'https://jsonplaceholder.typicode.com/users';

describe('getApiRequest() integration test', () => {
    
    it('should make successful Api call with 200 response', async () => {
        let output = await getApiRequest(uri);
        expect(output.statusCode).to.equal(200);
    })

    it('should bring the correct length of array', async () => {
        let output = await getApiRequest(uri);
        expect(output.body.length).to.equal(10);
    })

    it('should return error message when API call fails', async () => {
        let output = await getApiRequest('fakeurl');
        expect(output.includes('Api request error')).to. be.true;
    })
})