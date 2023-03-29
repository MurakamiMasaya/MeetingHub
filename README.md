## MeetingHub のリポジトリです

## 環境構築手順

- clone

```shell
$ git clone https://github.com/MurakamiMasaya/MeetingHub.git
$ cd meeting-hub
```

- 立ち上げ

```shell
$ npm run dev
```

- DynamoDB local

```shell
$ docker pull amazon/dynamodb-local
$ docker run -d -p 8000:8000 amazon/dynamodb-local -jar DynamoDBLocal.jar -sharedDb
$ docker ps --no-trunc
$ npm install dynamodb-admin -g
$ npx dynamodb-admin -o
```

DynamoDB localにアクセス(http://localhost:8001)