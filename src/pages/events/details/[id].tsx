import { Footer, Header } from '@/components'
import { mediaQuery } from '@/hooks'
import { BaseContainer } from '@/themes'
import styled from '@emotion/styled'
import { GetServerSideProps, NextPage } from 'next'

type Props = {
  id: string
  event_name: string
  event_purpose: string
  event_location: string
  event_memo?: string
}

const EventDetail: NextPage<Props> = ({
  id,
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
          <h1>Event {id}</h1>
          <h1>Name {event_name}</h1>
          <h1>Purpose {event_purpose}</h1>
          <h1>Location {event_location}</h1>
          <h1>Memo {event_memo}</h1>
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
      id: item.id.S,
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
  flex-direction: column;
  gap: 24px;
  padding: 40px 16px;
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

export default EventDetail
