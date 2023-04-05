import { Button, InputField, TextArea } from '@/components'
import { Event } from '@/types/Event'
import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb'
import styled from '@emotion/styled'
import { NextPage } from 'next'
import { useCallback, useState } from 'react'

export const EventForm: NextPage = () => {
  const [eventName, setEventName] = useState('')
  const [eventPurpose, setEventPurpose] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventMemo, setEventMemo] = useState('')

  // イベントをテーブルに保存する
  const handleSaveEvent = useCallback(async (newEvent: Event) => {
    const config: DynamoDBClientConfig = {
      endpoint: process.env.DYNAMODB_ENDPOINT,
      region: process.env.DYNAMODB_REGION,
      credentials: {
        accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID ?? 'FAKE',
        secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY ?? 'FAKE'
      }
    }
    console.log(config, 'config')

    const dbClient = new DynamoDBClient(config)
    const documentClient = DynamoDBDocumentClient.from(dbClient)

    const params = {
      TableName: 'events',
      Item: {
        eventName: newEvent.eventName,
        eventPurpose: newEvent.eventPurpose,
        eventLocation: newEvent.eventLocation,
        eventMemo: newEvent.eventMemo
      }
    }

    const command = new PutCommand(params)

    try {
      await documentClient.send(command)
      console.log('Success')
    } catch (error) {
      console.error(error)
    }
  }, [])

  const handleSubmit = useCallback(() => {
    const newEvent: Event = {
      eventName,
      eventPurpose,
      eventLocation,
      eventMemo
    }
    console.log(newEvent, 'newEvent')
    handleSaveEvent(newEvent)
  }, [eventName, eventPurpose, eventLocation, eventMemo])

  const handleEventName = useCallback((value: string) => {
    setEventName(value)
  }, [])
  const handleEventPurpose = useCallback((value: string) => {
    setEventPurpose(value)
  }, [])
  const handleEventLocation = useCallback((value: string) => {
    setEventLocation(value)
  }, [])
  const handleEventMemo = useCallback((value: string) => {
    setEventMemo(value)
  }, [])

  return (
    <FormContainer>
      <InputField
        label="イベント名"
        id="event-name"
        placeholder="〇〇同窓会、〇〇打ち合わせ"
        maxLength={20}
        value={eventName}
        setValue={handleEventName}
        required={true}
      />
      <InputField
        label="イベントの目的"
        id="event-purpose"
        placeholder="飲み会、ショッピング"
        maxLength={20}
        value={eventPurpose}
        setValue={handleEventPurpose}
        required={true}
      />
      <InputField
        label="イベントを開催したい範囲"
        id="event-location"
        placeholder="東京、関西"
        maxLength={20}
        value={eventLocation}
        setValue={handleEventLocation}
        required={true}
      />
      <TextArea
        label="メモ"
        id="memo"
        placeholder="締切は〇〇日まで"
        maxLength={1000}
        value={eventMemo}
        setValue={handleEventMemo}
        required={false}
        rows={15}
        cols={10}
      />
      <Button onClick={handleSubmit}>イベントを作る</Button>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
`
