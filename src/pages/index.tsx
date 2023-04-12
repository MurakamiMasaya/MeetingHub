import { EventForm, Footer, Header } from '@/components'
import { mediaQuery, useBoolean } from '@/hooks'
import styled from '@emotion/styled'
import { NextPage } from 'next'

const Home: NextPage = () => {
  const { isResponsive } = useBoolean()

  return (
    <>
      <Header />
      <ImageWrapper>
        <Image
          src={`/description_${isResponsive ? 'sp' : 'pc'}.png`}
          alt="description"
        />
        <Image src="/adsense_gray.png" alt="google adsense" />
      </ImageWrapper>
      <EventFormContainer>
        <EventForm />
        <ImageWrapper>
          <Image src="/adsense_white.png" alt="google adsense" />
        </ImageWrapper>
      </EventFormContainer>
      <Footer />
    </>
  )
}

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
const EventFormContainer = styled('div')`
  background-color: #e3eff5;
`

export default Home
