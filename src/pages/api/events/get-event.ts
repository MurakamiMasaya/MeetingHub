import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb'
import type { NextApiRequest, NextApiResponse } from 'next'

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
    const { id } = req.query
    const getItemCommand = new GetItemCommand({
      TableName: 'events',
      Key: {
        id: { S: id as string }
      }
    })

    const getResultData = await dbClient.send(getItemCommand)

    res.status(200).json({
      result: getResultData
    })
  } catch (error) {
    res.status(500).json({ result: error })
  }
}
