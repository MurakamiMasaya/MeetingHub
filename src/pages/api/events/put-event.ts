import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

const dbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID ?? 'dummy',
    secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY ?? 'dummy'
  },
  endpoint: process.env.DYNAMODB_ENDPOINT,
  region: process.env.DYNAMODB_REGION
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const event = req.body.data
    const putCommand = new PutItemCommand({
      TableName: 'events',
      Item: {
        id: { S: uuidv4() },
        event_name: { S: event.name },
        event_purpose: { S: event.purpose },
        event_location: { S: event.location },
        event_memo: { S: event.memo }
      }
    })

    const putResultData = await dbClient.send(putCommand)
    console.log(putResultData, 'putResultData')

    res.status(200).json({
      result: 'SUCCESS'
    })
  } catch (error) {
    res.status(500).json({ result: error })
  }
}
