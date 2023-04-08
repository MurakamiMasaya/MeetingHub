import { Event } from '@/types/Event'
import AWS from 'aws-sdk'

export const putEvent = async (newEvent: Event) => {
  AWS.config.update({
    region: process.env.DYNAMODB_REGION,
    credentials: {
      accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID ?? 'FAKE',
      secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY ?? 'FAKE'
    }
  })

  const documentClient = new AWS.DynamoDB.DocumentClient()

  const params = {
    TableName: 'events',
    Item: {
      event_name: newEvent.name,
      event_purpose: newEvent.purpose,
      event_location: newEvent.location,
      event_memo: newEvent.memo
    }
  }

  try {
    return await documentClient.put(params).promise()
  } catch (error) {
    console.error(error)
    throw error
  }
}
