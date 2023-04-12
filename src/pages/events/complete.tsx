import { Button, Footer, Header, InputText } from '@/components'
import { mediaQuery } from '@/hooks'
import { BaseContainer, BaseText, BaseTitle } from '@/themes'
import styled from '@emotion/styled'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Complete: NextPage = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const router = useRouter()

  const { event_id: id } = router.query
  const detailLink = `${process.env.APP_URL}/events/details/${id}`

  const handleCopy = () => {
    navigator.clipboard.writeText(detailLink)
    setIsCopied(true)
  }
  const pushToEventDetail = () => {
    router.push(detailLink)
  }

  return (
    <>
      <Header />
      <CompleteComponent>
        <ImageWrapper>
          <Image src="/adsense_white.png" alt="google adsense" />
        </ImageWrapper>
        <CompleteContainer>
          <TitleWrapper>
            <BaseTitle className="-white -left">
              イベントを作成しました
            </BaseTitle>
            <BaseText className="-white -left">
              イベント参加者全員が使えるURLをみんなに共有して楽々集まろう！
            </BaseText>
          </TitleWrapper>
          <EventURLWrapper>
            <InputText isDisabled={false} value={detailLink} />
            <Button
              color="inherit"
              className="-half-width -bg-white"
              variant="outlined"
              size="small"
              onClick={handleCopy}
            >
              {isCopied ? 'コピーしました' : 'クリックしてコピー'}
            </Button>
          </EventURLWrapper>
          <ButtonWrapper>
            <Button
              className="-full-width"
              size="large"
              onClick={pushToEventDetail}
            >
              イベントページを表示する
            </Button>
          </ButtonWrapper>
        </CompleteContainer>
        <ImageWrapper>
          <Image src="/adsense_white.png" alt="google adsense" />
        </ImageWrapper>
      </CompleteComponent>
      <Footer />
    </>
  )
}

const CompleteComponent = styled('div')`
  height: auto;
  background-color: #5aa2cb;
`
const CompleteContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 16px;
`
const TitleWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const ButtonWrapper = styled('div')`
  margin-top: 32px;
`
const EventURLWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

export default Complete
