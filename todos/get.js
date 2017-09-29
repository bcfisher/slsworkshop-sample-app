'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const uuid = require('uuid'); //For stubbed item - remove later

module.exports.get = (event, context, callback) => {
    const timestamp = new Date().getTime();

    console.log('get id', event.pathParameters.id);
    
    const item = {
        id: uuid.v1(),
        text: 'Learn Serverless',
        checked: false,
        createdAt: timestamp,
        updatedAt: timestamp,
      };
    

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(item),
    };
    callback(null, response);

};