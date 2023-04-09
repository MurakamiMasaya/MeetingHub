import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'
import type { NextApiRequest, NextApiResponse } from 'next'

const dbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: 'dummy',
    secretAccessKey: 'dummy'
  },
  endpoint: 'http://localhost:8000',
  region: 'ap-northeast-1'
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
        eventName: { S: event.name },
        eventPurpose: { S: event.purpose },
        eventLocation: { S: event.location },
        eventMemo: { S: event.memo }
      }
    })

    const putResultData = await dbClient.send(putCommand)
    console.log(putResultData, 'putResultData')

    res.status(200).json({
      result: 'SUCCESS'
    })
  } catch (error) {
    res.status(500).json({ result: 'failed to put data' })
  }
}

// export const putEvent = async (newEvent: Event) => {
//   AWS.config.update({
//     region: process.env.DYNAMODB_REGION,
//     credentials: {
//       accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID ?? 'FAKE',
//       secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY ?? 'FAKE'
//     }
//   })
//
//   const documentClient = new AWS.DynamoDB.DocumentClient()
//
//   const params = {
//     TableName: 'events',
//     Item: {
//       event_name: newEvent.name,
//       event_purpose: newEvent.purpose,
//       event_location: newEvent.location,
//       event_memo: newEvent.memo
//     }
//   }
//
//   try {
//     return await documentClient.put(params).promise()
//   } catch (error) {
//     console.error(error)
//     throw error
//   }
// }
