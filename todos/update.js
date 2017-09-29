'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const uuid = require('uuid'); //For stubbed item - remove later

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  // validation
  if (typeof data.text !== 'string' || typeof data.checked !== 'boolean') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t update the todo item.',
    });
    return;
  }

  const item = {
    id: uuid.v1(),
    text: data.text,
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