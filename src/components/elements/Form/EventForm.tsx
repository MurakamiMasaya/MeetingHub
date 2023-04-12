import { Button, InputText, InputTextarea } from '@/components'
import { mediaQuery } from '@/hooks'
import { BaseTitle } from '@/themes'
import { Event } from '@/types/Event'
import styled from '@emotion/styled'
import { yupResolver } from '@hookform/resolvers/yup'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { object, string } from 'yup'

export const EventForm: NextPage = () => {
  const router = useRouter()
  const getSchema = () => {
    return object({
      name: string()
        .required('イベント名を入力してください。')
        .max(20, 'イベント名は最大20文字です'),
      purpose: string()
        .required('イベント目的を入力してください')
        .max(30, 'イベント目的は最大30文字です'),
      location: string()
        .required('イベントを開催したい範囲を入力してください')
        .max(20, '開催したい範囲は最大30文字です'),
      memo: string().max(1000, 'メモは最大1000文字です')
    })
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Event>({
    mode: 'onChange',
    resolver: yupResolver(getSchema())
  })

  const onSubmit = async (data: Event) => {
    const uuid = uuidv4()
    const newEvent = {
      id: uuid,
      name: data.name,
      purpose: data.purpose,
      location: data.location,
      memo: data.memo
    }

    try {
      await fetch('/api/events/put-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: newEvent })
      })

      await router.push({
        pathname: '/events/complete',
        query: { event_id: uuid }
      })
    } catch (error) {
      console.error('Failed to fetch data from API', error)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <BaseTitle>必要事項を入力して、イベントを作成しよう！！</BaseTitle>
      <InputText
        label="イベント名"
        name="name"
        placeholder="〇〇同窓会、〇〇打ち合わせ"
        maxLength={20}
        isRequired
        register={register<'name'>('name')}
        helperText={errors.name?.message ?? ''}
        error={'name' in errors}
      />
      <InputText
        label="イベントの目的"
        name="purpose"
        placeholder="飲み会、ショッピング"
        maxLength={30}
        isRequired
        register={register<'purpose'>('purpose')}
        helperText={errors.purpose?.message ?? ''}
        error={'purpose' in errors}
      />
      <InputText
        label="イベントを開催したい範囲"
        name="location"
        placeholder="東京、関西"
        maxLength={20}
        isRequired
        register={register<'location'>('location')}
        helperText={errors.location?.message ?? ''}
        error={'location' in errors}
      />
      <InputTextarea
        label="メモ"
        name="memo"
        placeholder="締切は〇〇日まで"
        maxLength={1000}
        register={register<'memo'>('memo')}
        helperText={errors.memo?.message ?? ''}
        error={'memo' in errors}
      />
      <ButtonWrapper>
        <Button className="-full-width" type="submit" size="large">
          イベントを作る
        </Button>
      </ButtonWrapper>
    </FormContainer>
  )
}

const FormContainer = styled('form')`
  display: grid;
  gap: 16px;
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;
  padding: 16px;
  ${mediaQuery('sp')} {
    width: 90%;
  }
`
const ButtonWrapper = styled('div')`
  margin-top: 32px;
`
