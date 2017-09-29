'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  if (typeof data.text !== 'string') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the todo item.',
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