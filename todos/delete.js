'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies


module.exports.delete = (event, context, callback) => {
    console.log('delete id', event.pathParameters.id);

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify({}),
    };
    callback(null, response);
};