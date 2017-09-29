# serverless workshop sample

This sample app was taken from [here](https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb)

## Phases

There are two phases in this lab. To go the phase 1 exercise, checkout the
phase1 tag, e.g. `git checkout phase1`. For phase2, check out phase2
for the starting point.

## Software dependencies

To install the uuid library used to generate ids for this sample, do this:

    npm install

## AWS Credentials

See [here](https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md)

Recommendation: create a named profile, the set the AWS\_PROFILE and
AWS\_REGION environment variables.

## Proxy

You will need to set the https_profile environment variable to be able 
to curl the endpoint if you require the use of a proxy to access the 
internet.

## Application Spec

We are building a very simple REST API for managing a to-do list. This list lets you create items, list them, update them, retrieve them individually,
and delete them.

Informally, the specification of the services is given by the following 
usage curl interactions.

## Usage

You can create, retrieve, update, or delete todos with the following commands:

### Create a Todo

```bash
curl -X POST https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos --data '{ "text": "Learn Serverless" }'
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa81-11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

### List all Todos

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos
```

Example output:
```bash
[{"text":"Deploy my first service","id":"ac90fe80-aa83-11e6-9ede-afdfa051af86","checked":true,"updatedAt":1479139961304},{"text":"Learn Serverless","id":"20679390-aa85-11e6-9ede-afdfa051af86","createdAt":1479139943241,"checked":false,"updatedAt":1479139943241}]%
```

### Get one Todo

```bash
# Replace the <id> part with a real id from your todos table
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id>
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa81-11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

### Update a Todo

```bash
# Replace the <id> part with a real id from your todos table
curl -X PUT https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id> --data '{ "text": "Learn Serverless", "checked": true }'
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa81-11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":true,"updatedAt":1479138570824}%
```

### Delete a Todo

```bash
# Replace the <id> part with a real id from your todos table
curl -X DELETE https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id>
```

No output



## Phase 1

For phase 1, we will examine the serverless.yml file, complete the rest of the resource functions, and deploy the app.

In todos, the create.js file references for the post method has been provided. Create the rest of the files and stub out their implementations.

Deploy the app via

    serverless deploy -s <badge number>

Including you badge number as the stage name will help ensure we don't step on each others toes.

You should see output that looks like this:

<pre>
erverless deploy -s myid
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
.....
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (18.95 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
...................................................................................................
Serverless: Stack update finished...
Service Information
service: slsworkshop
stage: myid
region: us-east-1
api keys:
  None
endpoints:
  POST - https://4nynttkjcb.execute-api.us-east-1.amazonaws.com/myid/todos
  GET - https://4nynttkjcb.execute-api.us-east-1.amazonaws.com/myid/todos
  GET - https://4nynttkjcb.execute-api.us-east-1.amazonaws.com/myid/todos/{id}
  PUT - https://4nynttkjcb.execute-api.us-east-1.amazonaws.com/myid/todos/{id}
  DELETE - https://4nynttkjcb.execute-api.us-east-1.amazonaws.com/myid/todos/{id}
functions:
  create: slsworkshop-myid-create
  list: slsworkshop-myid-list
  get: slsworkshop-myid-get
  update: slsworkshop-myid-update
  delete: slsworkshop-myid-delete
</pre>

Once you deploy you can access your URLs as documented in the Usage section. Note that you will receive errors if you have not implemented the
function.

Example:

<pre>
curl -X POST https://4nynttkjcb.execute-api.us-east-1.amazonaws.com/myid/todos --data '{ "text": "Learn Serverless" }'
{"id":"a2ba4ad0-a53f-11e7-b145-0d52db352c38","text":"Learn Serverless","checked":false,"createdAt":1506707838973,"updatedAt":1506707838973}

curl https://4nynttkjcb.execute-api.us-east-1.amazonaws.com/myid/todos
{"message": "Internal server error"}
<pre>

Note that as you add or modify functions you can update the function
code directly without redeploying the entire stack, e.g.

`serverless deploy function --function update --stage myid`

You can view the logs for a function using the logs command,
for example `serverless logs --stage myid --function get`

## Clean Up

`serverless remove --stage <badge id>`