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

- DynamoDB Localを起動する

```shell
$ make up
```

DynamoDB Localにアクセス(http://localhost:8001)

- テーブル作成の手順(サンプル)

```shell
--テーブル作成
$ aws dynamodb create-table --table-name sample-users \
    --attribute-definitions AttributeName=Id,AttributeType=N \
    --key-schema AttributeName=Id,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
    --endpoint-url http://localhost:8000
    
--テーブル確認
$ aws dynamodb list-tables --endpoint-url http://localhost:8000
    
--データ挿入
$ aws dynamodb put-item --table-name sample-users --item '{"Id":{"N":"1"},"Name":{"S":"Jack"}, "Id":{"N":"2"},"Name":{"S":"Peter"}}' --endpoint-url http://localhost:8000

--データ確認
$ aws dynamodb get-item --table-name sample-users --key '{"Id":{"N":"1"}}' --endpoint-url http://localhost:8000

--データ削除
$ aws dynamodb delete-item --table-name sample-users --key '{"Id":{"N":"1"}}' --endpoint-url http://localhost:8000
```
AWS CLIを使う時に、--endpoint-urlオプションを指定し忘れると、Webサービス側のDynamoDBに接続されるの注意する