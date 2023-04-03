## みんなで集合 のリポジトリです

- 仮の URL

https://meeting-hub-two.vercel.app/

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

- DynamoDB Local を起動する

```shell
$ make up
```

DynamoDB Local にアクセス(http://localhost:8001)

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
$ aws dynamodb put-item --table-name sample-users --item '{"Id":{"N":"1"},"Name":{"S":"Jack"}}' --endpoint-url http://localhost:8000

--データ確認
$ aws dynamodb get-item --table-name sample-users --key '{"Id":{"N":"1"}}' --endpoint-url http://localhost:8000

--データ削除
$ aws dynamodb delete-item --table-name sample-users --key '{"Id":{"N":"1"}}' --endpoint-url http://localhost:8000
```

AWS CLI を使う時に、--endpoint-url オプションを指定し忘れると、Web サービス側の DynamoDB に接続されるの注意する
