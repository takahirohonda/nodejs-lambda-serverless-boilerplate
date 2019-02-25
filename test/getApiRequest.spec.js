'use strict';

const { expect } = require("chai");
const nock = require('nock');
const { getApiRequest } = require('../src/lib/getApiRequest');

const mockUri = 'https://helloworld.com'

describe('Testing getApiRequest()', function(){

  beforeEach(function() {
    nock(mockUri).get('/user').reply(200, {message: "hello world"})
  })

  it('shoud return correct status code upon success', async function(){
    let response = await getApiRequest(mockUri + '/user')
    let statusCode = response.statusCode
    expect(statusCode).to.equal(200)
  })

  it('shoud return correct response body upon success', async function(){
    let response = await getApiRequest(mockUri + '/user')
    let body = response.body
    expect(body).to.deep.equal({message: "hello world"})
  })

  it('should return error message when api call is unsuccessful', async function(){
    let response = await getApiRequest('non existing uri');
    expect(response).to.include('Api request error')
  })
})

