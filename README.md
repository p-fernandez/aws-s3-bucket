# CONFIG

Copy example file `config.example.json` located in `./server/config` and create a `config.json` file.
Fill its content accordingly:
```javascript
{
  "env": "production",
  "aws": {
    "accessKeyId": "<Access Key Here>",
    "bucketName": "<Bucket Name Here>",
    "region": "<Region here>",
    "secretAccessKey": "<Secret Access Key Here>"
  }
}
```

The configuration would be automatically pulled by `nconf` and applied inside the project.

# EXECUTION

First run:
```bash
yarn docker:build
```
and once completed, just run:
```
yarn docker:run
```

The container would be deployed and listening in the port `49160`.

# LOCAL INSTALL

For a local install just:
```bash
yarn install
```
and then just:
```
yarn start
```

The server will be available in the port `8080`.

# POSTMAN

Under the folder `postman` there are available the API collection files plus the environments files for both Docker and local execution.

# TESTS

A humble batch of integration tests and a small batch of unit tests for the key parts of the Domain are available through:
```bash
yarn test
```
