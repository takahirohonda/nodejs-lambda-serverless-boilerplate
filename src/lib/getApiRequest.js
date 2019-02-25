'use strict'

const request = require('request-promise');

const getApiRequest = (uri) => {

  const options = {
    method: 'GET',
    uri: uri,
    resolveWithFullResponse: true
  }

  return request(options)
    .then((response) => {
      let output = {
        statusCode: response.statusCode,
        headers: response.headers,
        body: JSON.parse(response.body)
      }
      return output
    })
    .catch((err) => {
      return `Api request error ${err}`
    })
}

module.exports = { getApiRequest }

// request-promise module is cool for making API requests with Node! --> https://github.com/request/request-promise - need both request & request-promise installed
// using example api endpoint from this one --> https://jsonplaceholder.typicode.com/

