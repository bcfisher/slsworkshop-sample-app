'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies



module.exports.list = (event, context, callback) => {
  
    const items = [];

    // create a response
    const response = {
        statusCode: 200,
        body: JSON.stringify(items),
    };
    callback(null, response);
};