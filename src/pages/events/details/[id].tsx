import { Footer, Header, InputText } from '@/components'
import { mediaQuery } from '@/hooks'
import { BaseContainer } from '@/themes'
import styled from '@emotion/styled'
import { GetServerSideProps, NextPage } from 'next'

type Props = {
  event_name: string
  event_purpose: string
  event_location: string
  event_memo?: string
}

const EventDetail: NextPage<Props> = ({
  event_name,
  event_purpose,
  event_location,
  event_memo
}) => {
  return (
    <div>
      <Header />
      <ImageWrapper>
        <Image src="/adsense_gray.png" alt="google adsense" />
      </ImageWrapper>
      <DetailComponent>
        <DetailContainer>
          <InputTextWrapper>
            <InputText
              label="イベント名"
              isDisabled={false}
              value={event_name}
              backgroundcolor="#E6E6E6"
            />
          </InputTextWrapper>
          <InputTextWrapper>
            <InputText
              label="イベントの目的"
              isDisabled={false}
              value={event_purpose}
              backgroundcolor="#E6E6E6"
            />
          </InputTextWrapper>
          <InputTextWrapper>
            <InputText
              label="イベントを開催したい範囲"
              isDisabled={false}
              value={event_location}
              backgroundcolor="#E6E6E6"
            />
          </InputTextWrapper>
          <InputTextWrapper>
            {event_memo && (
              <InputText
                label="メモ"
                isDisabled={false}
                value={event_memo}
                backgroundcolor="#E6E6E6"
              />
            )}
          </InputTextWrapper>
        </DetailContainer>
      </DetailComponent>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params
}) => {
  const { id } = params!
  const response = await fetch(
    `${process.env.APP_URL}/api/events/get-event?id=${id}`
  )
  const data = await response.json()
  const item = data.result.Item

  return {
    props: {
      event_name: item.event_name.S,
      event_purpose: item.event_purpose.S,
      event_location: item.event_location.S,
      event_memo: item.event_memo.S
    }
  }
}

const DetailComponent = styled('div')`
  height: auto;
  background-color: #e3eff5;
`
const DetailContainer = styled(BaseContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3%;
  padding: 40px 16px;
  ${mediaQuery('sp')} {
    gap: 0;
  }
`
const ImageWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 36px 24px;
  margin: 0 auto;
  max-width: 1000px;
  ${mediaQuery('sp')} {
    padding: 24px 16px;
  }
`
const Image = styled('img')`
  width: 100%;
`
const InputTextWrapper = styled('div')`
  flex-basis: 47%;
  margin-bottom: 24px;
  ${mediaQuery('sp')} {
    flex-basis: 100%;
  }
`

export default EventDetail
